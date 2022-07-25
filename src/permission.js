import store from './store'
import router from './router'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const userInfo = store.getters.userInfo
      // const navList = store.getters.navList
      if (userInfo) {
        next()
      } else {
        const userInfo = await store.dispatch('login/getUserInfo')
        // const navList = await store.dispatch('user/getNav')
        console.log('用户所有信息=>', userInfo)
        // console.log(navList)
        if (userInfo) {
          const routes = await store.dispatch(
            'permission/filterRoutes',
            userInfo.menus
          )
          console.log(routes)
          if (routes) {
            routes.forEach((item) => {
              router.addRoute('layout', item)
            })
            return next(to.path)
          }
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
