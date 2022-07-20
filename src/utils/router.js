/**
 * 获取所有的非一级路由数据
 * @param {*} routes
 */
export default function filterRouters(params) {
  const newRoutes = []
  params.forEach((item) => {
    item.child.forEach((v) => {
      const routes = menuRoutes(v)
      newRoutes.push(routes)
    })
    return newRoutes
  })
}

/**
 * 把所有菜单数据过滤成路由数据
 */
function menuRoutes(v) {
  if (!v) return null
  const route = {
    path: v.frontpath,
    name: v.icon,
    meta: {
      title: v.name,
      icon: v.icon,
      desc: v.desc
    }
  }
  route.component = () => import(`../views/${v.desc}`)
  return route
}

// const getChildrenRoutes = (routes) => {
//   const result = []
//   routes.forEach((item) => {
//     if (item.children && item.children.length > 0) {
//       result.push(...item.children)
//     }
//   })
//   return result
// }

// /**
//  * 获取所有的一级数据
//  */
// export const filterRouters = (routes) => {
//   // childrenRoutes 所有的子路由
//   const childrenRoutes = getChildrenRoutes(routes)
//   // routes 完整的路由 16 数据
//   return routes.filter((route) => {
//     return !childrenRoutes.find((childrenRoute) => {
//       return childrenRoute.path === route.path
//     })
//   })
// }

// /**
//  * 检测空对象 以及  检测空数据 如果为空返回true
//  * @param {*} data
//  * @returns
//  */
// const isNull = (data) => {
//   if (!data) return true
//   if (JSON.stringify(data) === '{}') return true
//   if (JSON.stringify(data) === '[]') return true
//   return false
// }

// /**
//  * 将所有的一级路由数据处理成菜单数据
//  */

// export const generateMenus = (routes) => {
//   const result = []
//   routes.forEach((item) => {
//     if (isNull(item.meta) && isNull(item.children)) return
//     console.log(item)

//     if (isNull(item.meta) && !isNull(item.children)) {
//       result.push(...generateMenus(item.children))
//       return
//     }

//     const routePath = item.path

//     let route = result.find((route) => route.path === routePath)

//     if (!route) {
//       route = {
//         ...item,
//         path: routePath,
//         children: []
//       }

//       if (item.meta.title && item.meta.icon) {
//         result.push(route)
//       }
//     }

//     if (item.children) {
//       route.children.push(...generateMenus(item.children))
//     }
//   })
//   return result
// }
