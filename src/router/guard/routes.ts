import qs from 'qs'
import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
import config from '@/config'
import router from '@/router'
import { appRoutes } from '@/router/routes'
import type { RouteRecord, SjzyRoute } from '@/types/router'
import { microApps } from '@/micro/microApps'

/**
 * @description all模式渲染后端返回路由,支持包含views路径的所有页面
 * @param asyncRoutes
 * @returns {*}  返回路由
 */
export function convertRouter(asyncRoutes: RouteRecord[]): RouteRecord[] {
  const modules = import.meta.glob('../../views/**/*.vue') as any

  return asyncRoutes.map((route: RouteRecord & { component?: any }) => {
    // 重新改写后端字段
    route.meta.noKeepAlive = !route.meta.noKeepAlive || false
    // if()
    if (route && route.component) {
      const component = route.component || ''
      const isMicroApp = ['MicroApp'].includes(`${component}`)
      const isLayout = ['Layout'].includes(`${component}`)
      if (!isMicroApp && !isLayout && component[0] !== '@') {
        throw new Error(
          `后端路由加载失败，请输入'Layout' 'MicroApp'或以'@/'开头的本地组件地址\n
            错误组件地址:${component} 错误组件名称:${route.meta.title}
          `,
        )
      }
      /* 如果是 isMicroApp */
      if (isMicroApp)
        route.component = () => import('@/views/micro/index.vue')

      /* 如果是 isLayout */
      if (isLayout)
        route.component = () => import('@/layouts/index.vue')

      if (!isMicroApp && !isLayout) {
        /* 如果找不到模块 */
        if (!modules[`../../${component.replace(/@\/*/, '')}.vue`]) {
          console.error(`
            错误组件地址:${component} 错误组件名称:${route.meta.title}
          `)
        }
        else {
          route.component = modules[`../../${component.replace(/@\/*/, '')}.vue`]
        }
      }
    }

    if (route.children) {
      route.children.length
        ? (route.children = convertRouter(route.children))
        : delete route.children
    }

    return route
  })
}

/**
 * 根据path路径获取matched
 * @param routes 菜单routes
 * @param path 路径
 * @returns {*} matched
 */
export function handleMatched(routes: RouteRecord[], path: string): RouteRecord[] {
  return routes
    .filter((route: RouteRecord) => (route?.childrenPathList || []).indexOf(path) + 1)
    .flatMap((route: RouteRecord) =>
      route.children ? [route, ...handleMatched(route.children, path)] : [route],
    )
}

/**
 * 生成单个多标签元素，可用于同步/异步添加多标签
 * @param tag route页信息
 */
export function handleTabs(tag: SjzyRoute | RouteRecord): any {
  let parentIcon = null
  if ('matched' in tag) {
    for (let i = tag.matched.length - 2; i >= 0; i--) {
      if (!parentIcon && tag.matched[i].meta?.icon)
        parentIcon = tag.matched[i].meta?.icon
    }
  }
  if (!parentIcon)
    parentIcon = 'menu-line'
  const path = handleActivePath(<SjzyRoute>tag, true)
  if (tag.name && tag.meta.tabHidden !== true) {
    return {
      path,
      query: 'query' in tag ? tag.query : {},
      params: 'params' in tag ? tag.params : {},
      name: tag.name as string,
      parentIcon,
      meta: { ...tag.meta },
    }
  }
}

/**
 * 根据当前route获取激活菜单
 * @param route 当前路由
 * @param isTab 是否是标签
 */
export function handleActivePath(route: SjzyRoute, isTab = false) {
  const { meta, path } = route
  const rawPath = route.matched ? route.matched[route.matched.length - 1].path : path
  const fullPath
    = route.query && Object.keys(route.query).length
      ? `${route.path}?${qs.stringify(route.query)}`
      : route.path
  const names = microApps.map(i => i.name)
  if (isTab) {
    return meta.dynamicNewTab
      ? fullPath
        .split('&')
        ?.filter((i) => {
          const key = i.split('=')[0]
          return names.every(app => !key.startsWith(app))
        })
        ?.join('&')
      : rawPath
  }
  if (meta.activeMenu)
    return meta.activeMenu
  return fullPath
}

/**
 * 获取当前跳转登录页的Route
 * @param currentPath 当前页面地址
 */
export function toLoginRoute(currentPath: string) {
  if (config.recordRoute && currentPath !== '/') {
    return {
      path: '/login',
      query: { redirect: currentPath },
      replace: true,
    }
  }
  else {
    return { path: '/login', replace: true }
  }
}

/**
 * 获取路由中所有的Name
 * @param routes 路由数组
 * @returns {*} Name数组
 */
export function getNames(routes: RouteRecord[]): string[] {
  return routes.flatMap((route: RouteRecord) => {
    const names = []
    if (route.name)
      names.push(route.name)
    if (route.children)
      names.push(...getNames(route.children))
    return names
  })
}

function fatteningRoutes(routes: RouteRecord[]): RouteRecord[] {
  return routes.flatMap((route: RouteRecord) => {
    return route.children ? fatteningRoutes(route.children) : route
  })
}

export function addRouter(routes: RouteRecord[]) {
  routes.forEach((route: RouteRecord) => {
    if (!router.hasRoute(route.name))
      router.addRoute(route as RouteRecordRaw)
    if (route.children)
      addRouter(route.children)
  })
}

export async function resetRouter(routes: RouteRecord[] = appRoutes) {
  routes.map((route: RouteRecord) => {
    if (route.children)
      route.children = fatteningRoutes(route.children)
    return false
  })
  router.getRoutes().forEach(({ name }) => {
    router.hasRoute(<RouteRecordName & string>name)
    && router.removeRoute(<RouteRecordName & string>name)
  })
  addRouter(routes)
}

// 获取路由参数
export function getParams() {
  const { currentRoute } = useRouter()
  return currentRoute.value.params
}
export function getQuery() {
  const { currentRoute } = useRouter()
  return currentRoute.value.query
}
