import type { RouteRecord } from '@/types/router'
import Layouts from '@/layouts/index.vue'

const customsCenter: RouteRecord[] = [
  {
    path: '/micro',
    name: 'MicroApp',
    component: Layouts,
    meta: {
      title: 'microapp',
      hidden: true,
    },
    children: [
      {
        path: `/microAppFmc/:page*`,
        name: 'MicroAppFmcIndex',
        component: () => import('@/views/micro/index.vue'),
        meta: {
          title: '财务子系统',
          hidden: true,
        },
      },
      {
        path: `/microAppMid/:page*`,
        name: 'MicroAppMidIndex',
        component: () => import('@/views/micro/index.vue'),
        meta: {
          title: '中台子系统',
          hidden: true,
        },
      },
    ],
  },
]

export default customsCenter
