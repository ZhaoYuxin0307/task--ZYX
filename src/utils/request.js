import axios from 'axios'
import store from '../store'
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 把token加入请求头中
    // 将token通过请求头发送给后台。
    const token = store.getters.token
    if (token) config.headers.Authorization = token
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // 解决token错误或是过期
    // if (response.data.code === 206) {
    //   removeToken()

    //   // 跳转登录页面
    //   if (router.history.current.fullPath !== '/login') {
    //     router.push('/login')
    //   }
    // }
    // 把response的data返回给客户端, 不需要可以删除下面1句代码
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.methods.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return axios(options)
}

export default request
