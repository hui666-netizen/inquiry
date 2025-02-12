import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import cookie from 'js-cookie'
import config from '@/config'
import { useGlobSetting } from '@/composables/setting/useGlobSetting'

const globSetting = useGlobSetting()

/** 处理路由页面的权限 */
export function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const router = useRouter()
  const mode = import.meta.env.MODE
  const { routes, setRoutes } = useRoutesStore()
  const { resetAll } = useUserStore()
  const hasToken = Boolean(cookie.get(`${mode}_${config.tokenTableName}`))
  const isWhiteRoute = config.routesWhiteList.includes(to.path)
  console.log(hasToken, 'hasToken')
  console.log(isWhiteRoute, 'isWhiteRoute')
  const routeSwitches: CommonType.StrategicPattern[] = [
    // 在访问白名单
    {
      condition: isWhiteRoute,
      callback: () => {
        next()
      },
    },
    // 如果没有权限
    {
      condition: !hasToken,
      callback: () => handleToLogin(),
    },
    // 没有菜单 就去获取菜单
    {
      condition: !routes.length,
      callback: async () => {
        try {
          // 根据路由模式获取路由并根据权限过滤
          await setRoutes(config.authentication, next)
          next({ ...to, replace: true })
        }
        catch (err) {
          console.error(' 错误拦截:', err)
          await resetAll()
        }
      },
    },
    // 有菜单
    {
      condition: !!routes.length,
      callback: () => next(),
    },
  ]
  routeSwitches.some(({ condition, callback }) => {
    if (condition)
      callback()

    return condition
  })

  /** 跳转登录 */
  function handleToLogin() {
    cookie.remove(`${mode}_${config.tokenTableName}`, {
      domain: globSetting.loginCookieDomain,
      path: '/',
    })
    if (globSetting.loginUrl) {
      window.location.href = `${globSetting.loginUrl}/login?replaceUrl=${window.origin}/slogin`
    }
    else {
      router.push({
        name: 'Login',
      })
    }
  }
}
