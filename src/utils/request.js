import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
http.interceptors.response.use(
  (res) => {
    return res.data.data
  },
  (err) => {
    if (err.name === 'AxiosError') {
      ElMessage.error('请求超时！')
    }
    return Promise.reject(err)
  }
)

// get,post,都可以使用data传参
const request = (option) => {
  if (option.method.toLowerCase() === 'get') {
    option.params = option.data || {}
  }
  return http(option)
}
export default request
