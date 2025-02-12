import type { RouteRecord } from '@/types/router'

const constantRoutes: RouteRecord[] = [
  // {
  //   path: '/slogin',
  //   name: 'SLogin',
  //   component: () => import('@/views/login/systemLogin.vue'),
  //   meta: {
  //     hidden: true,
  //     breadcrumbHidden: false,
  //     noKeepAlive: true,
  //   },
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/PageLogin/index.vue'),
    meta: {
      hidden: true,
      title: '登录',
      tabHidden: true,
    },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true,
    },
  },
  // {
  //   path: '/tlogin',
  //   name: 'tLogin',
  //   component: () => import('@/views/login/tLogin.vue'),
  //   meta: {
  //     hidden: true,
  //   },
  // },
]

export default constantRoutes
