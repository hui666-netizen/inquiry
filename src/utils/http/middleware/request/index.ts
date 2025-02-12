import { getStorage } from '@sjzy/utils'
import qs from 'qs'
import type { RequestConfig } from '../../types'
import logout from '../logout'
import { optimizationCacheReq } from '../cache'
import { checkToken } from './token'
import gConfig from '@/config'
import proxyConfig from '@/config/proxy.config'
/**
 * 设置Index和Size
 */
function copyPageProperties(source: { pageIndex?: number, pageSize?: number }, target: any) {
  if (source && source.pageIndex && source.pageSize) {
    // grpc
    target.PageRequest = {
      Index: source.pageIndex,
      Size: source.pageSize,
    }

    // 效能平台
    target.page = source.pageIndex
    target.list_rows = source.pageSize
  }
}

/** 处理模拟配置 */
async function handleMockConfig(config: RequestConfig) {
  const apiPrefix = config.url?.split('/')[1] as string
  config.baseURL = 'https://mock.apifox.com/m1/2996799-0-default'
  config.url = config.url?.replace(`${apiPrefix}/`, '')
}

/** 处理非模拟配置的请求 */
function handleNonMockConfig(config: RequestConfig) {
  if (!getStorage('debug_proxy')) {
    const apiPrefix = config.url?.split('/')[1] as string
    config.baseURL = (proxyConfig[apiPrefix] as string) || gConfig.baseURL

    if (config.noApiPrefix)
      config.url = config.url?.replace(`${apiPrefix}/`, '')
  }
}

/** 处理token 校验过期 */
async function handleToken(config: RequestConfig) {
  try {
    await checkToken(config)
  }
  catch {
    await logout()
  }
}

/** 设置业务类需要的header */
function setHeaders(config: RequestConfig) {
  const userStore = useUserStore()
  const { businessId, subSysId } = userStore

  config.headers!.SubSystemId = subSysId || ''
  config.headers!.BusinessId = businessId || ''
  config.headers!.Address = localStorage.getItem('address') || '172.26.*'
}

/** 处理数据 */
function handleData(config: RequestConfig) {
  if (config.data)
    copyPageProperties(config.data, config.data)

  if (config.params)
    copyPageProperties(config.params, config.params)

  if (
    config.data
    && config.headers!['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
  ) {
    config.data = qs.stringify(config.data)
  }

  if (config.data instanceof FormData)
    config.headers!['Content-Type'] = 'multipart/form-data'

  if (config.method === 'get') {
    config.paramsSerializer = {
      serialize(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
    }
  }
}

async function requestConf(config: RequestConfig): Promise<any> {
  if (config.mock) {
    await handleMockConfig(config)
  }
  else {
    handleNonMockConfig(config)
  }

  await handleToken(config)
  setHeaders(config)
  handleData(config)
  await optimizationCacheReq(config)

  return config
}
export default requestConf
