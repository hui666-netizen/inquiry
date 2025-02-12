/**
 * @description tabsBar标签页逻辑，如无必要请勿修改
 */
import microApp from '@micro-zoe/micro-app'
import calc from '@sjzy/calc'
import type { OptionType, TabsModuleType } from '@/types/store'
import type { RouteRecord } from '@/types/router'
import { handleTabs } from '@/router'
import { microApps } from '@/micro/microApps'

export const useTabsStore = defineStore('tabs', {
  state: (): TabsModuleType => ({
    /** 所有打开的标签 */
    visitedRoutes: [],
    /** 展示的标签 */
    showRoutes: [],
    /** 隐藏的标签 */
    hiddenRoutes: [],
    /** 标签文案最大宽度 */
    tabTextMaxWidth: 140,
    /** 标签文案最小宽度 */
    tabTextMinWidth: 40,
    /** 标签左右内间距 */
    paddingWidth: 30,
    /** 关闭图标宽度10+间距8 */
    closeIconWidth: 18,
  }),
  getters: {
    getVisitedRoutes: (state) => {
      return state.visitedRoutes.filter((route: RouteRecord) => route.name !== 'Login')
    },
    getShowRoutes: (state) => {
      return state.visitedRoutes.filter(
        (route: RouteRecord) => route.name !== 'Login' && !route.isHidden,
      )
    },
    getHiddenRoutes: (state) => {
      return state.visitedRoutes.filter(
        (route: RouteRecord) => route.name !== 'Login' && route.isHidden,
      )
    },
  },
  actions: {
    /**
     * @description 添加标签页
     * @param {*} route
     */
    async addVisitedRoute(route: RouteRecord, index?: number) {
      // 获取microapp应用的地址栏路径
      const names = microApps.map(i => i.name)
      const queryParams = route.path.split('&')?.filter((i) => {
        const key = i.split('=')[0]
        return names.every(app => !key.startsWith(app))
      })
      const microAppPath = queryParams.join('&')
      const isInMicro = names.some(i => route.path.includes(i))

      const target = this.visitedRoutes.find((item: RouteRecord) => {
        return isInMicro ? item.path === microAppPath : item.path === route.path
      })

      // 多详情页也要展示出来
      if (target) {
        target.isHidden = false
        if (!route.meta.dynamicNewTab) {
          Object.assign(target, route)
        }
      }
      else if (!target) {
        // 设置显示
        route.isHidden = false
        if (index) {
          // 插入到visitedRoutes的index索引位置
          this.visitedRoutes.splice(index, 0, route)
        }
        else {
          this.visitedRoutes.push(Object.assign({}, route))
        }
      }

      // 应对极特殊情况：没有配置noClosable的情况，默认使当前tab不可关闭
      if (!this.visitedRoutes.find((route: RouteRecord) => route.meta.noClosable))
        this.visitedRoutes[0].meta.noClosable = true
    },
    /**
     * @description 删除当前标签页
     * @param {*} path
     */
    delVisitedRoute(path: string) {
      const delTarget = this.visitedRoutes.find(route => route.path === path)
      // 如果删除的是显示的标签，将隐藏标签前移一个
      if (!delTarget?.isHidden) {
        // console.log('删除显示标签')
        const target = this.visitedRoutes.find(route => route.isHidden)
        if (target)
          target.isHidden = false
      }
      this.visitedRoutes = this.visitedRoutes.filter(route => route.path !== path)

      // 调用微前端方法执行操作
      const activesApps = microApp.getActiveApps()
      activesApps.forEach((app) => {
        microApp.setData(app, {
          type: 'delVisitedRoute',
          path,
        })
      })
    },
    /**
     * @description 删除当前标签页以外其它全部标签页
     * @param {*} path
     */
    async delOthersVisitedRoutes(path: string) {
      this.visitedRoutes = this.visitedRoutes.filter(
        (route: RouteRecord) => route.meta.noClosable || route.path === path,
      )

      // 调用微前端方法执行操作
      const activesApps = microApp.getActiveApps()
      activesApps.forEach((app) => {
        microApp.setData(app, {
          type: 'delOthersVisitedRoutes',
          path,
        })
      })
    },
    /**
     * @description 删除当前标签页左边全部标签页
     * @param {*} path
     */
    async delLeftVisitedRoutes(path: string) {
      let found = false
      this.visitedRoutes = this.visitedRoutes.filter((route: RouteRecord) => {
        if (route.path === path)
          found = true
        return route.meta.noClosable || found
      })

      // 调用微前端方法执行操作
      const activesApps = microApp.getActiveApps()
      activesApps.forEach((app) => {
        microApp.setData(app, {
          type: 'delLeftVisitedRoutes',
          path,
        })
      })
    },
    /**
     * @description 删除当前标签页右边全部标签页
     * @param {*} path
     */
    async delRightVisitedRoutes(path: string) {
      let found = false
      this.visitedRoutes = this.visitedRoutes.filter((route: RouteRecord) => {
        const close = found
        if (route.path === path)
          found = true
        return route.meta.noClosable || !close
      })

      // 调用微前端方法执行操作
      const activesApps = microApp.getActiveApps()
      activesApps.forEach((app) => {
        microApp.setData(app, {
          type: 'delRightVisitedRoutes',
          path,
        })
      })
    },
    /**
     * @description 删除全部标签页
     */
    async delAllVisitedRoutes(noClosePaths?: string[]) {
      this.visitedRoutes = this.visitedRoutes.filter(
        (route: RouteRecord) => route.meta.noClosable || noClosePaths?.includes(route.path),
      )

      // 调用微前端方法执行操作
      const activesApps = microApp.getActiveApps()
      activesApps.forEach((app) => {
        microApp.setData(app, {
          type: 'delAllVisitedRoutes',
        })
      })
    },
    /**
     * @description 修改 meta
     * @param options
     */
    changeTabsMeta(options: OptionType) {
      const handleVisitedRoutes = (visitedRoutes: RouteRecord[]) => {
        return visitedRoutes.map((route: RouteRecord) => {
          if (
            route.path === options.path
            || route.name === options.name
            || route.meta.title === options.title
          ) {
            Object.assign(route.meta, options.meta)
          }
          if (route.children && route.children.length)
            route.children = handleVisitedRoutes(route.children)
          return route
        })
      }
      this.visitedRoutes = handleVisitedRoutes(this.visitedRoutes)
    },
    /**
     * @description 计算tab标签的宽度
     */
    calcTabWidth(words: string) {
      let wordsWidth = 0
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.font
          = '12px -apple-system, "blinkmacsystemfont", "segoe ui", "pingfang sc", "hiragino sans gb", "microsoft yahei", "helvetica neue", "helvetica", "arial", sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"'

        if (ctx.measureText(words).width >= this.tabTextMaxWidth)
          wordsWidth = this.tabTextMaxWidth
        else if (ctx.measureText(words).width <= this.tabTextMinWidth)
          wordsWidth = this.tabTextMinWidth
        else wordsWidth = ctx.measureText(words).width
      }
      return wordsWidth + this.paddingWidth * 2
    },
    /**
     * @description 判断是否已经占满，区分显示隐藏的菜单
     */
    changeTabsForMore() {
      const routesStore = useRoutesStore()
      const { getActiveMenu: activeMenu } = storeToRefs(routesStore)

      // 标签盒子
      const tabsBox = document.querySelector('.sjzy-layout-header .sjzy-tabs-label') as HTMLElement
      // 展示标签宽度
      const showTargets = document.querySelector(
        '.sjzy-layout-header .sjzy-tabs-label .content',
      ) as HTMLElement

      if (!tabsBox)
        return

      const diffWidth = calc.subtract(showTargets.offsetWidth, tabsBox?.offsetWidth)
      // console.log(diffWidth, '标签栏内容-盒子')

      const lastShowTarget = this.getShowRoutes.filter(
        i => !i.meta?.noClosable && i.path !== activeMenu.value.data,
      )?.[0]
      const lastHiddenTarget = this.getHiddenRoutes?.[0]

      // 标签内容比盒子的宽度大，放不下开始隐藏
      if (diffWidth >= 0) {
        const obj = this.visitedRoutes.find(i => i.path === lastShowTarget?.path)
        if (obj)
          obj.isHidden = true
      }
      else {
        const absDiffWidth = Math.abs(diffWidth) - 10
        const obj = this.visitedRoutes.find(i => i.path === lastHiddenTarget?.path)
        // console.log(this.calcTabWidth(obj?.meta?.title), absDiffWidth)
        if (obj && this.calcTabWidth(obj.meta?.title) < absDiffWidth)
          obj.isHidden = false
      }
    },
    /**
     * @description 添加多详情页标签
     * @param {*} to
     */
    addMoreRouteTab(to: RouteRecord, path: string, arr: any) {
      arr.reduce((sum: number, item: any, index: number) => {
        const title = item.title
        const arr1 = []
        for (const key of Object.keys(item)) {
          if (key !== 'title')
            arr1.push(`${key}=${item[key]}`)
        }

        delete item.title
        this.addVisitedRoute(
          handleTabs({
            ...to,
            ...{ query: item },
            meta: {
              ...to.meta,
              title: title || to.meta.title,
            },
          }),
        )
        return sum + index
      }, 0)
    },
  },

  persist: true,
})

export default useTabsStore
