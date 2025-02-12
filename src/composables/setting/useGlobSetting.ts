import type { GlobConfig } from '@/types/utils'
import { getAppEnvConfig } from '@/utils'

function bool(realName: boolean | string): boolean | string {
  if (realName === 'true')
    return true
  else if (realName === 'false')
    return false
  else return realName
}

export function useGlobSetting(): Readonly<GlobConfig> {
  const {
    VITE_DEV_LOGIN,
    VITE_DEV_PROXY,
    VITE_LOGIN_URL,
    VITE_COOKIE_DOMAIN,
    VITE_LOGIN_URL_PORT,
  } = getAppEnvConfig()

  const glob: Readonly<GlobConfig> = {
    devProxy: VITE_DEV_PROXY,
    devLogin: bool(VITE_DEV_LOGIN),
    loginUrl: VITE_LOGIN_URL,
    loginCookieDomain: VITE_COOKIE_DOMAIN,
    loginPort: Number(VITE_LOGIN_URL_PORT),
  }
  return glob as Readonly<GlobConfig>
}
