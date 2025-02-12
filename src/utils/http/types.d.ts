import type { AxiosRequestConfig } from 'axios'

declare type RequestConfig = {
  requestType?: string
  /** 接口是否携带前缀 */
  noApiPrefix?: boolean
  /** 是否开启mock */
  mock?: boolean
  /** 是否返回响应体全部数据 */
  isFetch?: boolean
} & AxiosRequestConfig

declare type HttpResponse<T = any> = {
  msg?: string
  code: string
  Code?: string
  data: DtoTrans<T>
  [key: string]: any
}
