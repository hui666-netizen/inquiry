import type { RouteMeta, RouteRecord } from './router'

declare type AclModuleType = {
  admin: boolean
  role: string[]
  permission: string[]
}

declare type ErrorLogModuleType = {
  errorLogs: any[]
}

declare type RoutesModuleType = {
  tab: {
    data: string | undefined
  }
  tabMenu: string | undefined
  activeMenu: {
    data: string | undefined
  }
  routes: RouteRecord[]
  /** 当前路由子应用名称 */
  microSubAppsName?: string
}

declare type DeviceType = 'mobile' | 'desktop'
declare type LanguageType = 'zh-CN' | 'en-US'

declare type SettingsModuleType = {
  theme: ThemeType
  device: DeviceType
  collapse: boolean
  language: LanguageType
  lock: boolean
  logo: string
  title: string
  version: Indexable
  languageEnumKey: string
  echartsGraphic1: string[]
  echartsGraphic2: string[]
}

declare type TabsModuleType = {
  visitedRoutes: RouteRecord[]
  showRoutes: RouteRecord[]
  hiddenRoutes: RouteRecord[]
  tabTextMaxWidth: number
  tabTextMinWidth: number
  paddingWidth: number
  closeIconWidth: number
}

declare type OptionType = {
  name?: string
  path?: string
  title?: string
  meta: RouteMeta
}

declare type UserModuleType = {
  token: string | boolean
  username: string
  userEnName: string
  employeeId: number
  avatar: string
  jwtUserId: string
  userId: string | number
  businessId: number | string
  subSysId: number
  companyId?: number
  telPhone?: string
  isMainlandCo: boolean
  roles: string[]
  isAdmin: boolean
  orgId: number
  country: number
  menu: Array<string>
  country: number
  digit2Code: string
  /** 登录人所属公司 */
  companyShortName: string
  companyCode: string
  /**
   * 空运出口CIF = 1
   * 空运出口FOB = 2
   * 空运进口CIF = 11
   * 空运进口FOB = 12
   * 海运出口CIF = 21
   * 海运出口FOB = 22
   * 海运进口CIF = 31
   * 海运进口FOB = 32
   * 空运出口航线 = 41
   * 海运出口航线 = 42
   * 空运进口航线 = 43
   * 海运进口航线 = 44
   * 操作 = 50
   * 业务 = 60
   * 铁运业务 = 62
   * 空运电商 = 64
   * 机场操作 = 80
   * 财务 = 90
   * CIF财务 = 92
   * 电商航线 = 101
   * DDU航线 = 102
   * 铁运航线 = 108
   * 铁运操作 = 107
   * 铁派电商 = 125
   * 报关人员 = 130
   * 分公司行政 = 150
   * 集团行政 = 155
   * 仓库人员 = 160
   * 海派电商 = 171
   * 电商运营 = 176
   */
  businessRoleEnums?: API.BusinessRoleEnum[]
  /** 是否包含FOB */
  isBusinessRoleFOB?: boolean
  /** 是否包含CIF */
  isBusinessRoleCIF?: boolean
  /** 是否包含航线 */
  isBusinessRoleRoute?: boolean
  /** 是否包含操作 */
  isBusinessRoleOperate?: boolean
  /** 是否大陆公司 */
  isMainlandCo?: boolean
}
