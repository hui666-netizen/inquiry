import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { appRoutes } from './routes'
import { createRouterGuard } from './guard'
import config from '@/config'

const isInMicroApp = window?.__MICRO_APP_ENVIRONMENT__
const { BASE_URL } = import.meta.env

/** 路由注册 */
export const router = createRouter({
  history: config.isHashRouterMode
    ? createWebHashHistory(config.publicPath)
    : createWebHistory(
      isInMicroApp ? window?.__MICRO_APP_BASE_ROUTE__ : BASE_URL || config.publicPath,
    ),
  routes: appRoutes as RouteRecordRaw[],
})

/** 安装vue路由 */
export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}

export * from './guard/routes'
export default router
