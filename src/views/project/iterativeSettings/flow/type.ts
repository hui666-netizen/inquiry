/** 下拉 */
export type Selector = {
  label: string
  value: string
}

/** 下拉禁用 */
export type SelectorDisabled = {
  label: string
  value: string
  disabled?: boolean
}

/** 状态库列表Row类型 */
export type FlowStatusRow = {
  id?: number
  project_id?: number
  status_enum_id: number
  isChecked?: boolean
  isActived?: boolean
  name: string
  colour: string
  flow_status_text_detail: FlowStatusDetail[]
}

/** 状态库已应用工作流 */
export type FlowStatusDetail = {
  flow_status_id: number
  status_flow_name: string
}

/** 状态库新增编辑 */
export type FlowStatusForm = {
  project_id?: number
  status_enum_id?: number
  name: string
  colour: string
}

/** 工作流列表Row类型 */
export type FlowRow = {
  id?: number
  process_node_ids?: number
  status_type?: number
  status_enum_id?: number
  flow_status_id?: number
  status_flow_name: string
}

/** 工作流列表详情 */
export type FlowDetail = {
  flow_status_id: number
  create_by: number
  create_by_name: string
  create_at: string
  update_by: number
  update_by_name: string
  update_at: string
  flow_process_id: number
  status_flow_name: string
  status_flow_desc: string
  project_id: number
  flow_status_collection: FlowStatusCollectionDetail[]
  flow_process_info: FlowProcessInfo
}

type FlowProcessInfo = {
  flow_process_id: number
  flow_process_name: string
}

type FlowStatusCollectionDetail = {
  status_type_text: string
  status_text_id: number
  status_enum_id: number
  status_type: number
  status_enum_name: string
  flow_status_node_relation: FlowStatusNodeRelation[]
}

type FlowStatusNodeRelation = {
  process_node_name: string
  process_node_id: number
}

/** 工作流新增编辑 */
export type FlowAddForm = {
  project_id: number
  status_flow_name: string
  flow_process_id: number
  status_flow_desc: string
  flow_status_collection: FlowStatusCollection[]
}

export type FlowEditForm = {
  status_flow_name: string
  flow_process_id: number
  flow_status_id: number
  status_flow_desc: string
  flow_status_collection: FlowStatusCollection[]
}

export type FlowStatusCollection = {
  status_enum_id?: number
  status_type?: number
  process_node_ids?: number[]
}
