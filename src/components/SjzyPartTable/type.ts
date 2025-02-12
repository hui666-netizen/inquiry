export type SjzyPartTableColumn = {
  /** 标题 */
  title?: string
  /** 字段名 */
  field: string
  /** 宽度 */
  width?: number
  /** 是否是链接 */
  isLink?: boolean
  /** 点击回调 */
  onClick?: (params: { row: Recordable }) => void
  /** 插槽 */
  slot?: string
}

export type SjzyPartTableProps = {
  /** 标题 */
  title: string
  /** 数据集合 */
  data?: Recordable[]
  /** 列配置 */
  columns: SjzyPartTableColumn[]
}
