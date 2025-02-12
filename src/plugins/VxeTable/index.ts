import 'xe-utils'
import type { App } from 'vue'
import VXETable from 'vxe-table'
import VxeUI from 'vxe-pc-ui'
import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginElement from './plugins/elementPlus'
import VXETablePluginCellRender from './plugins/cellRender'
import VXETablePluginFormats from './plugins/formats'
import i18n from '@/i18n'
import 'vxe-table/lib/style.css'
import 'vxe-pc-ui/lib/style.css'
import './plugins/elementPlus/style.scss'

// table-pro
import './pro/vxe-table-extend-cell-area.min.css'
import './pro/vxe-table-extend-cell-area.es6.min'

export function setupVxeTable(app: App) {
  VXETable.setConfig({
    cellVaildMode: 'obsolete',
    authId: 'jsx8laufzf5ofh15', // Auth ID 在官网登录查看
    translate: (key, args) => i18n.global.t(key, args),
    i18n: (key: any, args?: any) => i18n.global.t(key, args),
    zIndex: 9999,
    table: {
      validConfig: {
        autoPos: true,
        autoClear: true,
        showMessage: true,
        msgMode: 'full',
      },
    },
  })
  VXETable.setIcon({
    TABLE_FILTER_NONE: 'iconfont icon-shaixuan',
    TABLE_FILTER_MATCH: 'iconfont icon-shaixuan',
  })
  VXETable.use(VXETablePluginElement)
  VXETable.use(VXETablePluginCellRender)
  VXETable.use(VXETablePluginFormats)
  VXETable.use(VXETablePluginMenus)
  app.use(VxeUI).use(VXETable)
}
