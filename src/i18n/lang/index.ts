import enLocale from 'element-plus/es/locale/lang/en'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import enUS from 'vxe-table/lib/locale/lang/en-US'
import sjzyUiZhCN from '@sjzy/ui/es/locale/lang/zh-cn'
import sjzyUiEnUS from '@sjzy/ui/es/locale/lang/en'
import zh from './zh-CN/zh-CN'
import en from './en/en'

// import zhJson from './zh-CN/zh-CN.json'
// import enJson from './en/en.json'

import airTrafficDataManagementZhCN from './zh-CN/airTrafficDataManagement-zh-CN'
import airTrafficDataManagementEn from './en/airTrafficDataManagement-en'
import seaFreightRateEn from './en/seaFreightRate-en'
import DDUEn from './en/DDUEn'

export default {
  'en-US': {
    ...en,
    ...enUS,
    ...enLocale,
    ...airTrafficDataManagementEn,
    ...seaFreightRateEn,
    ...sjzyUiEnUS,
    ...DDUEn,
  },
  'zh-CN': {
    ...zh,
    ...zhCN,
    ...zhLocale,
    ...airTrafficDataManagementZhCN,
    ...sjzyUiZhCN,
  },
}
