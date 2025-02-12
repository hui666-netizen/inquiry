/** 静态枚举数据 */
import { SjzyDynamicTypeOptions } from '@sjzy/ui'
import { translateTitle as t } from '@/utils'

export const enumLocal = {
  /** 是/否 */
  booleanMap: [
    { label: t('是'), value: true },
    { label: t('否'), value: false },
  ],
  /** 是/否 */
  enableMap: [
    { label: t('启用'), value: true },
    { label: t('禁用'), value: false },
  ],
  /** 字段组件类型 */
  fieldMap: SjzyDynamicTypeOptions,
}
