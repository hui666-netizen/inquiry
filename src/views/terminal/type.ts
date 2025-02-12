export type TerminalUnit = {
  enum_code: string
  enum_name: string
  enum_value: string
  enum_type: number
}

export type EnvData = {
  link: string
  version: string
  ifShow?: boolean
  enum_name: string
  enum_code: string
  enum_value: string
  enum_type: number
}

export type FieldItem = {
  field_id: number
  field_label: string
  field_name: string
  field_component: Recordable
  remark: string
  field_sort: number
  field_type: number
  template_default: number
  version?: string
  is_required?: boolean
  default_value?: any
  envData: EnvData[]
}
