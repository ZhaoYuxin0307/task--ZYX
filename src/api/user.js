import request from '@/utils/request'

// 登录接口
const getlogin = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'post'
  })
}
// 退出登录接口
// const logout = () => {
//   return request({ url: '', method: 'post' })
// }

export { getlogin }
