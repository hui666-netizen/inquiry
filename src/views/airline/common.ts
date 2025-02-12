import { AirCompanyGetPageGET } from '@/api/dc-default/AirCompany'
import { AirportGetPageGET } from '@/api/dc-default/Airport'
import { CurrencyGetPageGET } from '@/api/dc-default/Currency'

type Column = {
  field: string
  title: string
  [key: string]: any
}

export type airTableRule = {
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  EndPlaceCode: string | undefined
  Mini: string | undefined
  N: string | undefined
  A45: string | undefined
  A100: string | undefined
  A250: string | undefined
  A300: string | undefined
  A500: string | undefined
  A1000: string | undefined
  A3000: string | undefined
  CurrencyCode: string | undefined
  CargoType: string | undefined
  PriceType: string | undefined
  StartTime: string | undefined
  EndTime: string | undefined
  ArrayDays: number | undefined
  AircraftType: number | undefined
  IsAddBoardFee: number | undefined
  IsDisclosurePrice: number | undefined
  IsRecommend: number | undefined
  Transit1Code: string | undefined
  TransitMethod1: number | undefined
  Transit2Code: string | undefined
  TransitMethod2: number | undefined
  DestinationTransitMethodId: number | undefined
  CnRemarks: string | undefined
  EnRemarks: string | undefined
  Carrier: string | undefined
  IsInternal: number | undefined
  ReviewedPersonName: string | undefined
  [key: string]: any
}

export const airComColumns: Column[] = [
  { field: 'AirlineCompany', title: '航司' },
  { field: 'StartPlace', title: '起运港' },
  { field: 'EndPlace', title: '目的港' },
  { field: 'Mini', title: '底价' },
  { field: 'N', title: '最低价格' },
  { field: 'A45', title: 'A_45' },
  { field: 'A100', title: 'A_100' },
  { field: 'A250', title: 'A_250' },
  { field: 'A300', title: 'A_300' },
  { field: 'A500', title: 'A_500' },
  { field: 'A1000', title: 'A_1000' },
  { field: 'A3000', title: 'A_3000' },
  { field: 'Currency', title: '币种' },
  { field: 'CargoType', title: '货物类型' },
  { field: 'PriceType', title: '价格类型' },
  { field: 'StartTime', title: '开始时间' },
  { field: 'EndTime', title: '结束时间' },
  { field: 'ArrayDays', title: '预计到达天数' },
  { field: 'AircraftType', title: '飞机类型', slots: { default: 'AircraftType' } },
  { field: 'IsAddBoardFee', title: '是否加收打板费', slots: { default: 'IsAddBoardFee' } },
  { field: 'IsDisclosurePrice', title: '是否公开', slots: { default: 'IsDisclosurePrice' } },
  { field: 'IsRecommend', title: '是否推荐', slots: { default: 'IsRecommend' } },
  { field: 'Transit1', title: '中转1' },
  { field: 'TransitMethod1', title: '中转1方式', slots: { default: 'Transit1' } },
  { field: 'Transit2', title: '中转2' },
  { field: 'TransitMethod2', title: '中转2方式', slots: { default: 'Transit2' } },
  {
    field: 'DestinationTransitMethod',
    title: '目的转运港方式',
    slots: { default: 'DestinationTransitMethod' },
  },
  { field: 'CnRemarks', title: '中文备注' },
  { field: 'EnRemarks', title: '英文备注' },
  { field: 'Carrier', title: '承运商' },
  { field: 'IsInternal', title: '内外部', slots: { default: 'IsInternal' } },
  { field: 'ReviewedPersonName', title: '审核人' },
  { field: 'CreateUserName', title: '创建人' },
  { field: 'CreateTime', title: '创建时间' },
  { field: 'UpdateUserName', title: '更新人' },
  { field: 'UpdateTime', title: '更新时间' },
]

export type transTableRule = {
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  StartTransit1Code: string | undefined
  TransitStartPlaceCode: string | undefined
  EndPlaceCode: string | undefined
  Mini: string | undefined
  N: string | undefined
  A45: string | undefined
  A100: string | undefined
  A250: string | undefined
  A300: string | undefined
  A500: string | undefined
  A1000: string | undefined
  A3000: string | undefined
  CurrencyCode: string | undefined
  CargoType: string | undefined
  PriceType: string | undefined
  StartTime: string | undefined
  EndTime: string | undefined
  ArrayDays: number | undefined
  AircraftType: number | undefined
  IsAddBoardFee: number | undefined
  IsDisclosurePrice: number | undefined
  IsRecommend: number | undefined
  Transit1Code: string | undefined
  TransitMethod1Id: number | undefined
  Transit2Code: string | undefined
  TransitMethod2Id: number | undefined
  Transit3Code: string | undefined
  TransitMethod3Id: number | undefined
  DestinationTransitMethodId: number | undefined
  CnRemarks: string | undefined
  EnRemarks: string | undefined
  Suppliers: string | undefined
  IsInternal: number | undefined
  CreateUser: string | undefined
  CreateTime: string | undefined
  UpdateUser: string | undefined
  UpdateTime: string | undefined
  ReviewedPersonName: string | undefined
  [key: string]: any
}

export const transComColumns: Column[] = [
  { field: 'AirlineCompany', title: '航司代码' },
  { field: 'StartPlace', title: '起运港' },
  { field: 'StartTransit1', title: '直飞第一中转港' },
  { field: 'TransitStartPlace', title: '转运起运港' },
  { field: 'EndPlace', title: '目的港' },
  { field: 'Mini', title: '底价' },
  { field: 'N', title: '初始价格' },
  { field: 'A45', title: 'A_45价格' },
  { field: 'A100', title: 'A_100价格' },
  { field: 'A250', title: 'A_250价格' },
  { field: 'A300', title: 'A_300价格' },
  { field: 'A500', title: 'A_500价格' },
  { field: 'A1000', title: 'A_1000价格' },
  { field: 'A3000', title: 'A_3000价格' },
  { field: 'Currency', title: '币种' },
  { field: 'CargoType', title: '货物类型' },
  { field: 'PriceType', title: '价格类型' },
  { field: 'StartTime', title: '开始时间' },
  { field: 'EndTime', title: '结束时间' },
  { field: 'ArrayDays', title: '预计到达天数' },
  { field: 'AircraftType', title: '飞机类型', slots: { default: 'AircraftType' } },
  { field: 'IsAddBoardFee', title: '是否加收打板费', slots: { default: 'IsAddBoardFee' } },
  { field: 'IsDisclosurePrice', title: '是否公开', slots: { default: 'IsDisclosurePrice' } },
  { field: 'IsRecommend', title: '是否推荐', slots: { default: 'IsRecommend' } },
  { field: 'Transit1', title: '中转1' },
  { field: 'TransitMethod1', title: '中转1方式', slots: { default: 'Transit1' } },
  { field: 'Transit2', title: '中转2' },
  { field: 'TransitMethod2', title: '中转2方式', slots: { default: 'Transit2' } },
  { field: 'Transit3', title: '中转3' },
  { field: 'TransitMethod3', title: '中转3方式', slots: { default: 'Transit3' } },
  {
    field: 'DestinationTransitMethod',
    title: '目的转运港方式',
    slots: { default: 'DestinationTransitMethod' },
  },
  { field: 'CnRemarks', title: '中文备注' },
  { field: 'EnRemarks', title: '英文备注' },
  { field: 'Suppliers', title: '供应商' },
  { field: 'IsInternal', title: '内外部', slots: { default: 'IsInternal' } },
  { field: 'ReviewedPersonName', title: '审核人' },
  { field: 'CreateUserName', title: '创建人' },
  { field: 'CreateTime', title: '创建时间' },
  { field: 'UpdateUserName', title: '更新人' },
  { field: 'UpdateTime', title: '更新时间' },
]

export type profitTableRule = {
  CustomerType: number | undefined
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  EndPlaceCode: string | undefined
  Mini: string | undefined
  N: string | undefined
  A45: string | undefined
  A100: string | undefined
  A250: string | undefined
  A300: string | undefined
  A500: string | undefined
  A1000: string | undefined
  A3000: string | undefined
  Currency: string | undefined
  [key: string]: any
}

export const profitComColumns: Column[] = [
  { field: 'CustomerType', title: '客户类型', slots: { default: 'CustomerType' } },
  { field: 'AirlineCompany', title: '航司代码' },
  { field: 'StartPlace', title: '起运港' },
  { field: 'EndPlace', title: '目的港' },
  { field: 'Mini', title: '底价' },
  { field: 'N', title: '初始价格' },
  { field: 'A45', title: 'A_45价格' },
  { field: 'A100', title: 'A_100价格' },
  { field: 'A250', title: 'A_250价格' },
  { field: 'A300', title: 'A_300价格' },
  { field: 'A500', title: 'A_500价格' },
  { field: 'A1000', title: 'A_1000价格' },
  { field: 'A3000', title: 'A_3000价格' },
  { field: 'Currency', title: '币种' },
  { field: 'CreateUserName', title: '创建人' },
  { field: 'CreateTime', title: '创建时间' },
  { field: 'UpdateUserName', title: '更新人' },
  { field: 'UpdateTime', title: '更新时间' },
]

/**
 * @description 定义了航线搜索规则，包括航空公司、起点和终点的类型。
 */
export type airSearchRule = {
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  EndPlaceCode: string | undefined
}

/**
 * @description 定义了中转搜索规则，包括航空公司、起点和中转点的类型。
 */
export type transSearchRule = {
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  TransitStartPlaceCode: string | undefined
}

/**
 * @description 定义了利润搜索规则，包括航空公司、起点、终点及客户类型的类型。
 */
export type profitSearchRule = {
  AirlineCompanyCode: string | undefined
  StartPlaceCode: string | undefined
  EndPlaceCode: string | undefined
  CustomerType: number | undefined
}

/**
 * @description 验证价格格式的规则，要求小数点前最多8位，小数点后最多2位。
 */
export const priceRule: any = () => {
  return [
    {
      validator: (_rule: any, value: any, callback: any) => {
        if (value === undefined || value === '') {
          callback()
        }
        else {
          const regex = /^\d{1,8}(?:\.\d{1,2})?$/
          if (!regex.test(value)) {
            callback(new Error('请输入正确的数值格式（小数点前最多8位，小数点后最多2位）'))
          }
          else {
            callback()
          }
        }
      },
      trigger: 'change',
    },
  ]
}

/**
 * @description 验证利润价格格式的规则，要求小数点前最多8位，小数点后最多2位，并且为必填项。
 */
export const profitPriceRule: any = () => {
  return [
    { required: true },
    {
      validator: (_rule: any, value: any, callback: any) => {
        if (value === undefined) {
          callback()
        }
        else {
          const regex = /^\d{1,8}(?:\.\d{1,2})?$/
          if (!regex.test(value)) {
            callback(new Error('请输入正确的数值格式（小数点前最多8位，小数点后最多2位）'))
          }
          else {
            callback()
          }
        }
      },
      trigger: 'change',
    },
  ]
}

/**
 * @description 配置机场接口，用于获取机场信息，包括代码、名称、英文名、城市名和国家/地区代码。
 */
export function portInterface() {
  return {
    options: {
      api: AirportGetPageGET,
      labelKey: ['code', 'cnName', 'enName', 'cityCnName', 'countryEnName'],
      tableTitle: ['代码', '名称', '英文名', '城市名', '国家/地区代码'],
      valueKey: 'code',
    },
    immediate: true,
  }
}

/**
 * @description 配置航空公司接口，用于获取航空公司信息，包括代码、数字代码、名称和英文名。
 */
export const CompanyInterface = {
  options: {
    api: AirCompanyGetPageGET,
    labelKey: ['code', 'numCode', 'cnName', 'enName'],
    tableTitle: ['代码', '数字代码', '名称', '英文名'],
    valueKey: 'code',
  },
  immediate: true,
}

/**
 * @description 配置货币接口，用于获取货币信息，包括代码和名称。
 */
export function currencyIdInterface() {
  return {
    options: {
      api: CurrencyGetPageGET,
      labelKey: ['code', 'cnName'],
      tableTitle: ['代码', '名称'],
      valueKey: ['code'],
    },
    immediate: true,
  }
}

/**
 * @description 配置飞机类型列选项，包括客机、货机和客/货机。
 */
export const AircrftTypeCol = {
  options: {
    spareData: [
      { label: '客机', value: 1 },
      { label: '货机', value: 2 },
      { label: '客/货机', value: 0 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
  required: true,
}

/**
 * @description 配置中转方式列选项，包括飞机和卡车。
 */
export const TransitMethodCol = {
  options: {
    spareData: [
      { label: '未知', value: 0 },
      { label: '飞机', value: 1 },
      { label: '卡车', value: 2 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 配置是否加收打板费的列选项，包括是和否。
 */
export const IsAddBoardFeeCol = {
  placeholder: '请选择是否加收打板费',
  options: {
    spareData: [
      { label: '否', value: 0 },
      { label: '是', value: 1 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 配置是否公开价格的列选项，包括是和否。
 */
export const IsDisclosurePriceCol = {
  placeholder: '请选择是否公开',
  options: {
    spareData: [
      { label: '否', value: 0 },
      { label: '是', value: 1 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 配置是否推荐的列选项，包括是和否。
 */
export const IsRecommendCol = {
  placeholder: '请输入是否推荐',
  options: {
    spareData: [
      { label: '否', value: 1 },
      { label: '是', value: 0 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 配置价格类型列选项，包括普价、特价、TACT RATE、IATA RATE、公布运价、快件价格和特殊货物运价。
 */
export const priceTypeCol = {
  options: {
    spareData: [
      { label: '普价', value: '普价' },
      { label: '特价', value: '特价' },
      { label: 'TACT RATE', value: 'TACT RATE' },
      { label: 'IATA RATE', value: 'IATA RATE' },
      { label: '公布运价', value: '公布运价' },
      { label: '快件价格', value: '快件价格' },
      { label: '特殊货物运价', value: '特殊货物运价' },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 配置数据类型列选项，包括内部数据和外部数据。
 */
export const IsInternalCol = {
  placeholder: '内部数据或外部数据',
  options: {
    spareData: [
      { label: '内部', value: 1 },
      { label: '外部', value: 0 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 验证整数天数的规则，要求只能输入整数，且不能超过五位数。
 */
export function arrayDaysRule() {
  return [
    {
      required: true,
    },
    {
      validator: (_rule: any, value: string, callback: (arg0?: Error | undefined) => void) => {
        const regex = /^\d{1,5}$/
        if (!regex.test(value)) {
          return callback(new Error('只能输入整数，不能超过五位数'))
        }
        callback()
      },
      trigger: 'change',
    },
  ]
}

/**
 * @description 配置客户类型列选项，包括直客、同行和海外代理。
 */
export const CustomerTypeCol = {
  options: {
    spareData: [
      { label: '直客', value: 1 },
      { label: '同行', value: 2 },
      { label: '海外代理', value: 3 },
    ],
    labelKey: ['label'],
    valueKey: 'value',
  },
}

/**
 * @description 根据客户类型的值计算其对应的标签文字。
 * @param val - 客户类型的值，1表示直客，2表示同行，3表示海外代理。
 * @returns 对应的标签文字。
 */
export function computedCustomerType(val: number) {
  if (val === 1) {
    return '直客'
  }
  else if (val === 2) {
    return '同行'
  }
  else if (val === 3) {
    return '海外代理'
  }
}

/**
 * @description 获取当前时间，并格式化为字符串，格式为YYYY-MM-DD HH:mm:ss
 * @returns 格式化后的当前时间字符串。
 */
export const getCurTime: any = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  return formattedDateTime
}

/**
 * @description 获取当前时间，并格式化为字符串，格式为YYYYMMDDHHmmss
 * @returns 格式化后的当前时间字符串(文件导出)。
 */
export const getCurTimes: any = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const formattedDateTime = `${year}${month}${day}${hours}${minutes}${seconds}`
  return formattedDateTime
}

export function getTransitMethod(val: number) {
  if (val === 1) {
    return '飞机'
  }
  else if (val === 2) {
    return '卡车'
  }
  else {
    return '未知'
  }
}

export function getAircrftType(val: number) {
  if (val === 1) {
    return '客机'
  }
  else if (val === 2) {
    return '货机'
  }
  else {
    return '客/货机'
  }
}
