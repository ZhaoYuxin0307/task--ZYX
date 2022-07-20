// import { publicRoutes, privateRoutes } from '../../router'
import filterRoutes from '@/utils/router'
import filtersMenus from '../../utils/menu'

export default {
  namespaced: true,
  state: {
    // routes: publicRoutes
    menuList: []
  },
  mutations: {
    SET_MENU_LIST(state, menu) {
      menu.forEach((v) => {
        state.menuList.push(v)
      })
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      const menu = filtersMenus(menus)
      commit('SET_MENU_LIST', menu)

      const route = filterRoutes(menu)
      return route
    }
  }
}
