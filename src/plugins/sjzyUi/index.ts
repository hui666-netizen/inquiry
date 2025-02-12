import type { TranslationArgs } from '@sjzy/ui'
import type { App } from 'vue'
import SjzyUi, { clickOutside, permission } from '@sjzy/ui'
// ../../../../F1/packages/library
import i18n from '@/i18n'
import '@sjzy/ui/lib/style.css'
import 'viewerjs/dist/viewer.css'
import request from '@/utils/http/request'
import CurrencySelect from '@/components/DataSelectList/CurrencySelect.vue'
import { GetCustomerTableConfigGet, PostCustomerTableConfigSave } from '@/api/devops/tongyong'

export function setupSjzyUi(app: App) {
  SjzyUi.setup({
    i18n: (key: string, args?: TranslationArgs) => (i18n as any).global.t(key, args),
    table: {
      currentPageField: 'page',
      pageSizeField: 'list_rows',
      dataField: 'data.data',
      totalField: 'data.total',
      pagerConfig: {
        pageSize: 50,
        pageSizes: [20, 50, 100, 300, 500],
      },
      // tableRowId: 'id',
      // showSetting: true,
      size: 'small',
      getCustomColumnsApi: async (data: any) => {
        const res = await GetCustomerTableConfigGet(
          {
            table_unique: data?.columnsKey,
            module_id: data?.columnsKey?.split('_module_')?.[1],
          },
          {},
        )
        return res
      },
      setCustomColumnsApi: (data: any) => {
        return PostCustomerTableConfigSave({
          ...data,
        })
      },
    } as any,
  })
  SjzyUi.setXHR(request as any)
  SjzyUi.setSjzyRegister(app, [{ name: 'CurrencySelect', component: CurrencySelect }])
  app.use(SjzyUi)

  app.directive('clickOutside', clickOutside)
  app.directive('permission', permission)
}
