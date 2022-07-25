import storage from '@/utils/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    tagList: storage.getItem('tagList') || [{ path: '/', title: '后台首页' }]
  },
  mutations: {
    ADD_TAG(state, obj) {
      let flag = false
      state.tagList.forEach((v) => {
        if (v.path === obj.path) {
          flag = true
        }
      })

      if (!flag) {
        state.tagList.push(obj)
        storage.setItem('tagList', state.tagList)
      }
    },
    DEL_TAG(state, path) {
      state.tagList = state.tagList.filter((v) => {
        return v.path !== path
      })
      storage.setItem('tagList', state.tagList)
    },
    HANDLE_CLOSE_OTHER(state, path) {
      state.tagList = state.tagList.filter((v) => {
        return v.path === path
      })
      state.tagList.forEach((v) => {
        if (v.path !== '/') {
          state.tagList.unshift({ path: '/', title: '后台首页' })
        }
      })

      storage.setItem('tagList', state.tagList)
    },
    HANDLE_CLOSE_ALL(state) {
      state.tagList = state.tagList.filter((v) => {
        return v.path === '/'
      })
      storage.setItem('tagList', state.tagList)
      router.push('/')
    }
  },
  actions: {
    addTag({ commit }, obj) {
      commit('ADD_TAG', obj)
    },
    delTag({ commit }, path) {
      commit('DEL_TAG', path)
    },
    handleCloseOther({ commit }, path) {
      console.log(path)
      commit('HANDLE_CLOSE_OTHER', path)
    },
    handleCloseAll({ commit }) {
      commit('HANDLE_CLOSE_ALL')
    }
  }
}
