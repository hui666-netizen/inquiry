import type { Axios, AxiosResponse } from 'axios'
import axios from 'axios'
import type { HttpResponse, RequestConfig } from './types'
import { requestMidd, responseMidd } from './middleware'
import { optimizationCacheErrorsRes, optimizationCacheSuccessRes } from './middleware/cache'
import gConfig from '@/config'

/**
 * @description axios初始化
 */
const config = {
  timeout: gConfig.requestTimeout,
  headers: {
    'Content-Type': gConfig.contentType,
  },
}
type ConfigType = {
  <T = any>(config: RequestConfig): Promise<HttpResponse<T>>
} & Axios

const instance: ConfigType = axios.create(config) as unknown as ConfigType

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(requestMidd, (error) => {
  return Promise.reject(error)
})

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    optimizationCacheSuccessRes(response)
    return responseMidd(response) as AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>
  },
  (error) => {
    optimizationCacheErrorsRes(error)
    const { type } = error
    if (type === 'Success') {
      return responseMidd(error.val)
    }
    else {
      $baseMessage(
        error.val
        || '连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ',
        'error',
      )
      return {}
    }
  },
)

export default instance
