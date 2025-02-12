import type { VXETableCore } from 'vxe-table'
import { useFormat } from '@sjzy/ui'

const { formatAmount } = useFormat()

export const VXETablePluginCellRender = {
  install(vxetablecore: VXETableCore) {
    const { renderer } = vxetablecore

    // 金额格式化以及右对齐模板
    renderer.add('Amount', {
      // 默认显示模板
      renderTableDefault: (_, params) => {
        const { row, column } = params
        // 返回一个h函数
        return [
          h(
            'span',
            {
              style: {
                float: 'right',
              },
            },
            formatAmount(row[column.field]),
          ),
        ]
      },
    })
  },
}

if (typeof window !== 'undefined' && window.VXETable && window.VXETable.use)
  window.VXETable.use(VXETablePluginCellRender as any)

export default VXETablePluginCellRender
