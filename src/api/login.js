import request from '@/utils/request'

// 登录
function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

// 获取用户信息
function getUserInfo() {
  return request({ url: '/admin/getinfo', method: 'post' })
}

// 退出登录
function logout() {
  return request({ url: '/admin/logout', method: 'post' })
}
export { login, getUserInfo, logout }
