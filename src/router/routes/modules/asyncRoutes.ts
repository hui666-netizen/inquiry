import microApp from './group/microApp'
import type { RouteRecord } from '@/types/router'

// const isUat = getEnv() !== 'uat'

const asyncRoutes: RouteRecord[] = [
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: Layouts,
  //   redirect: '/index',
  //   meta: {
  //     title: '首页',
  //     icon: 'icon-shouye',
  //     breadcrumbHidden: true,
  //     subTitle: '首页',
  //     levelHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/index',
  //       name: 'Dashboard',
  //       component: () => import('@/views/index/dashboard.vue'),
  //       meta: {
  //         title: '首页',
  //         noClosable: true,
  //         icon: 'icon-shouye',
  //         isLevel1: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/',
  //   name: 'Index',
  //   redirect: '/mange/client',
  //   component: Layouts,
  //   meta: {
  //     title: '管理员',
  //     icon: 'icon-zhongduan',
  //     subTitle: '用户管理',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/mange/client',
  //       name: 'MangeIndex',
  //       component: () => import('@/views/mange/index.vue'),
  //       meta: {
  //         title: '用户管理',
  //         subTitle: '用户管理',
  //         noClosable: false,
  //       },
  //     },
  //     {
  //       path: '/manage/allsale',
  //       name: 'MangeAllsale',
  //       component: () => import('@/views/mange/Allsale.vue'),
  //       meta: {
  //         title: '登录过的业务员',
  //         subTitle: '登录过的业务员',
  //         noClosable: false,
  //       },
  //     },
  //     {
  //       path: '/manage/fensheng',
  //       name: 'MangeFensheng',
  //       component: () => import('@/views/mange/Fensheng.vue'),
  //       meta: {
  //         title: '区管省',
  //         subTitle: '区管省',
  //         noClosable: false,
  //       },
  //     },
  //     {
  //       path: '/manage/inquire',
  //       name: 'MangeInquire',
  //       component: () => import('@/views/mange/Inquire.vue'),
  //       meta: {
  //         title: '咨询总列表',
  //         subTitle: '咨询总列表',
  //         noClosable: false,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/sale',
  //   name: 'Sale',
  //   redirect: '/sale/inquire',
  //   component: Layouts,
  //   meta: {
  //     title: '业务员',
  //     icon: 'icon-zhongduan',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/sale/inquire',
  //       name: 'SaleInquire',
  //       component: () => import('@/views/sale/index.vue'),
  //       meta: {
  //         title: '咨询列表',
  //         subTitle: '咨询列表',
  //         noClosable: false,
  //       },
  //     },
  //     {
  //       path: '/sale/client',
  //       name: 'SaleClient',
  //       component: () => import('@/views/sale/Client.vue'),
  //       meta: {
  //         title: '用户管理',
  //         subTitle: '用户管理',
  //         noClosable: false,
  //       },
  //     },
  //     {
  //       path: '/sale/center',
  //       name: 'SaleCenter',
  //       component: () => import('@/views/sale/Center.vue'),
  //       meta: {
  //         title: '业务员中心',
  //         subTitle: '业务员中心',
  //         noClosable: false,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/route',
  //   name: 'Route',
  //   component: Layouts,
  //   redirect: '/route/direct',
  //   meta: {
  //     title: '航线员',
  //     icon: 'icon-zhongduan',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/route/direct',
  //       name: 'DirectRoute',
  //       meta: {
  //         title: '直飞运价维护',
  //         subTitle: '直飞运价维护',
  //         noClosable: false,
  //       },
  //       component: () => import('@/views/airline/index.vue'),
  //     },
  //     {
  //       path: '/route/transhipment',
  //       name: 'Transhipment',
  //       meta: {
  //         title: '转运运价维护',
  //         subTitle: '转运运价维护',
  //         noClosable: false,
  //       },
  //       component: () => import('@/views/airline/Transhipment.vue'),
  //     },
  //     {
  //       path: '/route/grossProfit',
  //       name: 'GrossProfit',
  //       meta: {
  //         title: '毛利润维护',
  //         subTitle: '毛利润维护',
  //         noClosable: false,
  //       },
  //       component: () => import('@/views/airline/GrossProfit.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/user',
  //   name: 'User',
  //   component: Layouts,
  //   redirect: '/user',
  //   meta: {
  //     title: '个人中心',
  //     icon: 'icon-zhongduan',
  //     breadcrumbHidden: true,
  //     // levelHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/user',
  //       name: 'userIndex',
  //       component: () => import('@/views/user/index.vue'),
  //       meta: {
  //         title: '个人中心',
  //         subTitle: '个人中心',
  //         isLevel1: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/terminal',
  //   name: 'TerminalManagement',
  //   component: Layouts,
  //   redirect: '/terminal',
  //   meta: {
  //     title: '终端管理',
  //     subTitle: '终端管理',
  //     icon: 'icon-zhongduan',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/terminal',
  //       name: 'Terminal',
  //       component: () => import('@/views/terminal/index.vue'),
  //       meta: {
  //         title: '终端管理',
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/terminalDetail/:id',
  //       name: 'TerminalDetail',
  //       component: () => import('@/views/terminal/detail.vue'),
  //       meta: {
  //         title: '终端详情',
  //         activeMenu: '/terminal',
  //         subTitle: '终端',
  //         noClosable: false,
  //         isLevel1: true,
  //         hidden: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/product',
  //   name: 'ProductManagement',
  //   component: Layouts,
  //   meta: {
  //     title: '产品管理',
  //     subTitle: '产品管理',
  //     icon: 'icon-yewu',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/product',
  //       name: 'ProductList',
  //       component: () => import('@/views/product/index.vue'),
  //       meta: {
  //         title: '产品管理',
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/product/detail/:id',
  //       name: 'ProductDetail',
  //       component: () => import('@/views/product/detail.vue'),
  //       meta: {
  //         title: '产品详情',
  //         activeMenu: '/product',
  //         hidden: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/microservices',
  //   name: 'MicroservicesManagement',
  //   component: Layouts,
  //   meta: {
  //     title: '微服务管理',
  //     subTitle: '微服务管理',
  //     icon: 'icon-weifuwu',
  //     breadcrumbHidden: true,
  //   },
  //   children: [
  //     {
  //       path: '/microservices',
  //       name: 'Microservices',
  //       component: () => import('@/views/microservices/index.vue'),
  //       meta: {
  //         title: '微服务管理',
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/microservices/detail/:id',
  //       name: 'MicroservicesDetail',
  //       component: () => import('@/views/microservices/detail.vue'),
  //       meta: {
  //         title: '微服务详情',
  //         activeMenu: '/microservices',
  //         hidden: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/project',
  //   name: 'Project',
  //   component: Layouts,
  //   redirect: '/project/iterativeSettings',
  //   meta: {
  //     title: '项目管理',
  //     icon: 'icon-cangku',
  //     isLevel1: true,
  //   },
  //   children: [
  //     {
  //       path: '/project/iterativeSettings',
  //       name: 'IterativeSettings',
  //       component: () => import('@/views/project/iterativeSettings/index.vue'),
  //       meta: {
  //         title: '迭代设置',
  //         noClosable: false,
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/project/iterativeSettingsAddForm',
  //       name: 'IterativeSettingsAddForm',
  //       component: () => import('@/views/project/iterativeSettings/module/addForm.vue'),
  //       meta: {
  //         title: '迭代新增页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/project/iterativeSettingsEditForm',
  //       name: 'IterativeSettingsEditForm',
  //       component: () => import('@/views/project/iterativeSettings/module/editForm.vue'),
  //       meta: {
  //         title: '迭代编辑页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/project/projectDetail',
  //       name: 'ProjectDetail',
  //       component: () => import('@/views/project/projectDetail/list.vue'),
  //       meta: {
  //         title: '项目详情', // 暂时命名，后期需更新为xxxxx详情，xxxx为项目名称
  //         noClosable: false,
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/project/workflowAdd',
  //       name: 'IterativeSettingsWorkflowAdd',
  //       component: () => import('@/views/project/iterativeSettings/workflow/add.vue'),
  //       meta: {
  //         title: '新增工作流程',
  //         hidden: true,
  //         activeMenu: '/project/iterativeSettings',
  //       },
  //     },
  //     {
  //       path: '/project/workflowEdit/:id',
  //       name: 'IterativeSettingsWorkflowEdit',
  //       component: () => import('@/views/project/iterativeSettings/workflow/edit.vue'),
  //       meta: {
  //         title: '编辑工作流程',
  //         hidden: true,
  //         activeMenu: '/project/iterativeSettings',
  //         dynamicNewTab: true,
  //       },
  //     },
  //     {
  //       path: '/project/iterativeSettingsFlowAddForm',
  //       name: 'IterativeSettingsFlowAddForm',
  //       component: () => import('@/views/project/iterativeSettings/flow/addForm.vue'),
  //       meta: {
  //         title: '新增工作流',
  //         hidden: true,
  //         activeMenu: '/project/iterativeSettings',
  //       },
  //     },
  //     {
  //       path: '/project/iterativeSettingsFlowEditForm/:id',
  //       name: 'IterativeSettingsFlowEditForm',
  //       component: () => import('@/views/project/iterativeSettings/flow/editForm.vue'),
  //       meta: {
  //         title: '编辑工作流',
  //         hidden: true,
  //         activeMenu: '/project/iterativeSettings',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/system',
  //   name: 'System',
  //   component: Layouts,
  //   redirect: '/system/productSettings',
  //   meta: {
  //     title: '系统配置',
  //     subTitle: '系统',
  //     noClosable: false,
  //     icon: 'icon-xitong1',
  //     isLevel1: true,
  //   },
  //   children: [
  //     {
  //       path: '/system/productSettings',
  //       name: 'ProductSettings',
  //       component: () => import('@/views/system/productSettings/index.vue'),
  //       meta: {
  //         title: '产品配置',
  //         noClosable: false,
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/system/terminalSettings',
  //       name: 'TerminalSettings',
  //       component: () => import('@/views/system/terminalSettings/index.vue'),
  //       meta: {
  //         title: '终端配置',
  //         noClosable: false,
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/system/microServiceSettings',
  //       name: 'MicroServiceSettings',
  //       component: () => import('@/views/system/microServiceSettings/index.vue'),
  //       meta: {
  //         title: '微服务配置',
  //         noClosable: false,
  //         isLevel1: true,
  //       },
  //     },
  //     {
  //       path: '/system/terminalSettingsAddForm',
  //       name: 'TerminalSettingsAddForm',
  //       component: () => import('@/views/system/terminalSettings/addForm.vue'),
  //       meta: {
  //         title: '终端新增页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/system/terminalSettingsEditForm',
  //       name: 'TerminalSettingsEditForm',
  //       component: () => import('@/views/system/terminalSettings/editForm.vue'),
  //       meta: {
  //         title: '终端编辑页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/system/microServiceSettingsAddForm',
  //       name: 'MicroServiceSettingsAddForm',
  //       component: () => import('@/views/system/microServiceSettings/addForm.vue'),
  //       meta: {
  //         title: '微服务新增页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/system/microServiceSettingsEditForm',
  //       name: 'MicroServiceSettingsEditForm',
  //       component: () => import('@/views/system/microServiceSettings/editForm.vue'),
  //       meta: {
  //         title: '微服务编辑页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/system/productSettingsAddForm',
  //       name: 'ProductSettingsAddForm',
  //       component: () => import('@/views/system/productSettings/addForm.vue'),
  //       meta: {
  //         title: '产品新增页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //     {
  //       path: '/system/productSettingsEditForm',
  //       name: 'ProductSettingsEditForm',
  //       component: () => import('@/views/system/productSettings/editForm.vue'),
  //       meta: {
  //         title: '产品编辑页面模板',
  //         noClosable: false,
  //         isLevel1: true,
  //         isHidden: true,
  //         hidden: true,
  //       },
  //     },
  //   ],
  // },
]

export default asyncRoutes

export const microAppRoutes: RouteRecord[] = [...microApp]
