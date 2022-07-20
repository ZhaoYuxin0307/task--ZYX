import request from '@/utils/request'

// 登录接口
function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息接口
 * @returns
 */
function getUserInfo() {
  return request({ url: '/admin/userInfo', method: 'get' })
}

// 退出登录接口
function logout() {
  return request({ url: '/admin/logout', method: 'post' })
}

export { login, getUserInfo, logout }
