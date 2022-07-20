import { createStore } from 'vuex'
import login from './modules/login'
import getters from './getters'
import permission from './modules/permission'
import tags from './modules/tags'

export default createStore({
  getters,
  modules: {
    login,
    permission,
    tags
  }
})
