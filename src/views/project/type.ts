/** 类别管理 */
export type IterationCategory = {
  iteration_category_id: number
  category_name: string
  category_en_name: string
  icon: string
  page_id: number
  workflow_id: number
  project_id: number
  is_enable: number
  loading?: boolean
}
