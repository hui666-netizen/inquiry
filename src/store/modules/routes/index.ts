/**
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
import { isArray } from '@sjzy/utils'
import type { NavigationGuardNext } from 'vue-router'
import cookie from 'js-cookie'
import { useRole } from '../user/useRole'
import { convertRouter, resetRouter } from '@/router'
import type { RouteRecord } from '@/types/router'
import type { OptionType, RoutesModuleType } from '@/types/store'
import asyncRoutes, { microAppRoutes } from '@/router/routes/modules/asyncRoutes'
import constantRoutes from '@/router/routes/modules/constantRoutes'
import { BackgroundGetBusinessRole } from '@/api/cams-inquiry/Background'
import config from '@/config'

export const useRoutesStore = defineStore('routes', {
  state: (): RoutesModuleType => ({
    /**
     * 一级菜单值
     */
    tab: {
      data: undefined,
    },
    /**
     * 一级菜单
     */
    tabMenu: undefined,
    /**
     * 自定义激活菜单
     */
    activeMenu: {
      data: undefined,
    },
    /**
     * 一级菜单
     */
    routes: [],
    microSubAppsName: undefined,
  }),
  getters: {
    getTab: state => state.tab,
    getTabMenu: state =>
      state.tab.data
        ? state.routes.find(route => route.name === state.tab.data)
        : { meta: { title: '' }, redirect: '/404', path: '' },
    getActiveMenu: state => state.activeMenu,
    getRoutes: state => state.routes.filter(_route => _route.meta.hidden !== true),
    getPartialRoutes: state =>
      state.routes.find(route => route.name === state.tab.data)?.children || [],
  },
  actions: {
    clearRoutes() {
      this.routes = []
    },
    /**
     * @description 多模式设置路由
     * @param mode
     */

    async setRoutes(mode = 'none', next?: NavigationGuardNext) {
      const userStore = useUserStore()
      const userRole = useRole()
      try {
        // 获取菜单
        await userStore.getUserInfo()
        // 默认前端路由
        let routes: RouteRecord[] = [...asyncRoutes]

        // 设置后端路由(不需要可以删除)
        if (mode === 'all') {
          const mode1 = import.meta.env.MODE
          const data = await BackgroundGetBusinessRole({
            Id: Number(userStore.userId),
            Token: cookie.get(`${mode1}_${config.tokenTableName}`),
          })
          const list = data.data.Data
          userRole.getRoleName(list)
          await userStore.getUserPermission()
          const menuData = list ? (Array.from(list) as any) : []
          // const menuData = []
          if (!isArray(menuData))
            $baseMessage('路由格式返回有误！', 'error')

          if (!list?.length) {
            next?.('/404')
            return
          }

          if (
            (menuData?.length && menuData[menuData.length - 1].path !== '*')
            || !menuData?.length
          ) {
            menuData.push({
              path: '/:pathMatch(.*)*',
              redirect: '/404',
              name: 'NotFound',
              meta: { hidden: true },
            })
          }
          routes = [...asyncRoutes, ...convertRouter(menuData), ...microAppRoutes]
          // routes = [...asyncRoutes, ...microAppRoutes]
        }
        const accessRoutes = [...constantRoutes, ...routes]
        // 设置菜单所需路由
        this.routes = JSON.parse(JSON.stringify(accessRoutes))
        // 根据可访问路由重置Vue Router
        await resetRouter(accessRoutes)
      }
      catch (err) {
        console.error('获取信息错误拦截:', err)
        await new Promise(resolve => setTimeout(resolve, 2000))
        await userStore.logout()
      }
    },
    changeMenuMeta(options: OptionType) {
      function handleRoutes(routes: RouteRecord[]) {
        return routes.map((route) => {
          if (route.name === options.name)
            Object.assign(route.meta, options.meta)

          if (route.children && route.children.length)
            route.children = handleRoutes(route.children)
          return route
        })
      }
      this.routes = handleRoutes(this.routes)
    },
    /**
     * @description 修改 activeName
     * @param activeMenu 当前激活菜单
     */
    changeActiveMenu(activeMenu: string) {
      this.activeMenu.data = activeMenu
    },
    /** 设置当前路由子应用名称 */
    setMicroSubAppsName(name: string) {
      this.microSubAppsName = name
    },
    /**
     * 递归获取路由的所有路径
     * @param router 路由列表
     * @return []string
     */
    getPath(router: RouteRecord[]) {
      let arr: string[] = []
      for (const r of router) {
        const path = r.path
        const children = r.children
        // 如果有子元素，不添加父元素的路径
        if (children && children.length > 0)
          arr = arr.concat(this.getPath(children))
        else arr.push(path)
      }
      return arr
    },
    /* 判断地址是否在路由中 */
    isExistPath(path: string) {
      const userStore = useUserStore()
      return userStore.getMenu.length !== 0
        ? userStore.getMenu.some(item => path.includes(item))
        : true
    },
  },
})

export default useRoutesStore
