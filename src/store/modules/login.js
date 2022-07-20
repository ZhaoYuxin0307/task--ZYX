import * as login from '@/api/login'
import * as getUserInfo from '@/api/login'
import * as storage from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: storage.getItem(TOKEN_KEY) || '',
    userInfo: '',
    isCollapse: false
  },
  mutations: {
    SET_TOKEN(state, params) {
      state.token = params
      storage.setItem(TOKEN_KEY, params)
    },
    SET_USER_INFO(state, params) {
      state.userInfo = params
    },
    UP_ISCOLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    async handleLogin({ commit }, params) {
      const response = await login(params)
      commit('SET_TOKEN', response.token)
      return response
    },
    async getUserInfo({ commit }) {
      const response = await getUserInfo()
      commit('SET_USER_INFO', response)
      return response
    }
  }
}
