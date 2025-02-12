import type { AxiosResponse } from 'axios'
import { debounce } from 'lodash-es'
import type { HttpResponse, RequestConfig } from '../../types'
import logout from '../logout'
import router from '@/router'

const CODE_MESSAGE: Record<number | string, string> = {
  200: '服务器成功返回请求数据',
  201: '新增或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出信息有误',
  401: '用户没有权限(令牌失效、用户名、密码错误、登录过期)',
  402: '令牌过期',
  403: '用户得到授权，但是访问是被禁止的',
  404: '访问资源不存在',
  406: '请求格式不可得',
  410: '请求资源被永久删除，且不会被看到',
  500: '服务器发生错误',
  501: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
}

const messageAlert = debounce((errMsg: string) => {
  // 是否显示高亮错误(与errorHandler钩子触发逻辑一致)
  $baseMessage(errMsg, 'error')
}, 300)

/** 999 */
async function handleLogout() {
  return await logout()
}
/** 403 */
function handleForbidden() {
  router.push({ path: '/403' })
}

/**
 * axios响应拦截器
 */
async function responseConf(res: AxiosResponse<HttpResponse>) {
  const { config, data, status, statusText, headers } = res
  // console.log(config.url)
  const { setCookie } = useUserStore()
  const maoData: HttpResponse = {
    status: 200,
    data: {},
    value: '{}',
    code: '200',
    message: '',
  }
  if (data) {
    maoData.Code = data.Code
    maoData.data = data.Value ? data.Value : data.data
    maoData.message = data.msg || data.Message || data.message
    maoData.code = (data.Status || data.code || status).toString()

    if (maoData.data && maoData.data.Pagination && maoData.data.ListElements) {
      const newPageData = maoData.data
      const {
        ListElements,
        Pagination: { Index, Size, Total },
      } = newPageData
      maoData.data.list = ListElements
      maoData.data.pagination = {
        index: Index,
        size: Size,
        total: Total,
      }
    }

    // 效能平台后端
    if (maoData.data?.current_page) {
      const { data, current_page, per_page, total } = maoData.data || {}
      maoData.data.list = data
      maoData.data.pagination = {
        index: current_page,
        size: per_page,
        total,
      }
    }
  }

  /** 200 */
  const handleSuccess = () => {
    if (headers['x-authorization']) {
      console.log('获取新token', 'X-Authorization,')
      setCookie(`gtf_token`, headers.authorization)
      setCookie(`gtf_x_token`, headers['x-authorization'])
      setCookie(`timespan`, headers.timespan)
      setCookie(`expired`, headers.expired)
    }
    maoData.code = '200'
    return (config as RequestConfig).isFetch ? res : maoData
  }

  /** 401 406 */
  const handleUnauthorized = async () => {
    if (!headers['x-authorization'] && config.url === '/OAuth/RefreshToken')
      return
    return await logout()
  }

  /** 错误 */
  const handleError = () => {
    let errMsg = ''
    if (maoData && maoData.message)
      errMsg = maoData.message
    else if (CODE_MESSAGE[maoData.status])
      errMsg = CODE_MESSAGE[maoData.status]
    else errMsg = statusText

    messageAlert(errMsg)
    return Promise.reject((config as RequestConfig).isFetch ? res : maoData)
  }

  const caseHandlers: Record<number | 'default', () => any> = {
    200: handleSuccess,
    20000: handleSuccess,
    401: handleUnauthorized,
    406: handleUnauthorized,
    999: handleLogout,
    403: handleForbidden,
    default: handleError,
  }

  const caseHandler = caseHandlers[Number(maoData.code)] || caseHandlers.default

  return caseHandler()
}

export default responseConf
