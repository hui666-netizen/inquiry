import cookie from 'js-cookie'
import dayjs from 'dayjs'
import type { RequestConfig } from '../../types'

/**
 * 刷新刷新令牌
 */
async function tryRefreshToken() {
  const userStore = useUserStore()
  try {
    await userStore.refreshToken()
  }
  catch (error) {
    console.error('refreshToken error =>', error)
  }
}

async function checkToken(config: RequestConfig) {
  const { getLanguage } = useSettingsStore()
  const mode = import.meta.env.MODE
  let token = cookie.get(`${mode}_gtf_token`)
  const expiredCookie = cookie.get(`${mode}_expired`) || 5
  const timespanCookie = cookie.get(`${mode}_timespan`) || 0
  const timespan = dayjs.unix(Number(timespanCookie)).add(Number(expiredCookie), 'm')
  const add = dayjs()
  if (token && add.isAfter(timespan) && !config.url!.includes('OAuth/RefreshToken')) {
    await tryRefreshToken()
    token = cookie.get(`${mode}_gtf_token`)
  }
  const newToken = cookie.get(`${mode}_gtf_token`)
  config.headers!['Accept-Language'] = getLanguage || 'zh-CN'
  if (!config.headers!.fsToken)
    config.headers!.Authorization = newToken
}

export { checkToken, tryRefreshToken }
