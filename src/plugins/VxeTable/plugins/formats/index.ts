import type { VxeUIExport } from 'vxe-table'
import { isBoolean, isNumber, isString } from '@sjzy/utils'
import { useFormat } from '@sjzy/ui'

const { formatAmount, formatToDate } = useFormat()

export const VXETablePluginFormats = {
  install(vxetablecore: VxeUIExport) {
    const { formats } = vxetablecore

    // 时间格式化
    formats.add('formatTime', {
      tableCellFormatMethod: ({ cellValue }: any, format: string, isTimeStamp = false) => {
        return cellValue ? formatToDate(cellValue, format, isTimeStamp) : ''
      },
    })

    // 金额格式化
    formats.add('formatAmount', {
      tableCellFormatMethod: ({ cellValue }: any, format: string) => {
        if (typeof cellValue === 'number')
          return formatAmount(cellValue, format)

        return cellValue ? formatAmount(cellValue, format) : '--'
      },
    })
    // 空值格式化
    formats.add('formatEmpty', {
      tableCellFormatMethod: ({ cellValue }: any, format = '--') => {
        return (isString(cellValue) && !/^\s*$/.test(cellValue))
          || isNumber(cellValue || isBoolean(cellValue))
          ? cellValue
          : format
      },
    })
  },
}

if (typeof window !== 'undefined' && window.VXETable && window.VXETable.use)
  window.VXETable.use(VXETablePluginFormats as any)

export default VXETablePluginFormats
