export type Extend = {
  field_name: string
  is_required: boolean
  default_value: string
}

export type Client = {
  client_id: number
  client_name: string
}

export type Microservice = {
  microservice_id: number
  microservice_name: string
}

export type IProductRow = {
  product_id: number
  product_name: string
  is_enable: number
  create_at: string
  extends: Extend[]
  client: Client[]
  microservice: Microservice[]
}

export type FieldList = {
  field_id: number
  field_label: string
  field_name: string
  field_component: any
  remark: string
  field_sort: number
  field_type: number
  template_default: number
}

export type Microservice_info = {
  label: string
  value: number
  envData?: any
  is_enable?: number
}

export type Client_info = {
  label: string
  value: number
  envData?: any
  is_enable?: number
}

export type IProductDetail = {
  product_id: number
  create_by: number
  create_by_name: string
  create_at: string
  update_by: number
  update_by_name: string
  update_at: string
  product_name: string
  extends: Extend[]
  is_enable: number
  fieldList: FieldList[]
  microservice_info: Microservice_info[]
  client_info: Client_info[]
}
