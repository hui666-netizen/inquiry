import type { Router } from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { createPermissionGuard } from './permission'
import { getPageTitle } from '@/utils'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  Nprogress.configure({
    easing: 'ease',
    speed: 500,
    trickleSpeed: 200,
    showSpinner: false,
  })

  router.beforeEach((to, from, next) => {
    // 开始 loadingBar
    Nprogress.start()
    // 页面跳转权限处理
    createPermissionGuard(to, from, next)
  })
  router.afterEach((to) => {
    // 设置document title
    document.title = getPageTitle(to.meta.title)
    // 结束 loadingBar
    Nprogress.done()
  })
}
