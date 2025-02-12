import type { SjzyRoute } from '@/types/router'
import { handleActivePath } from '@/router'

export function useTabs() {
  const route = useRoute()
  const router = useRouter()
  const tabsStore = useTabsStore()
  const { changeTabsMeta } = tabsStore

  /**
   * @description: 设置 tab 标题
   * @param {string} title
   * @param {SjzyRoute} tabRoute
   * @return {*}
   */
  const setTitle = (title: string, tabRoute = route) => {
    changeTabsMeta({
      path: handleActivePath(tabRoute as SjzyRoute, true),
      meta: {
        title,
      },
    })
    document.title = `${title} - DevOPS`
  }

  /** 跳转最后一个标签页 */
  const toLastTab = async () => {
    const latestView = tabsStore.getVisitedRoutes
      .filter((_: any) => _.path !== handleActivePath(route, true))
      .slice(-1)[0]
    if (latestView)
      await router.push(latestView)
    else await router.push('/')
  }

  return {
    setTitle,
    toLastTab,
  }
}
