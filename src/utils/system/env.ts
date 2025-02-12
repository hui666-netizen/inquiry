import { getStorage } from '@sjzy/utils'
import type { GlobEnvConfig } from '@/types/utils'

/**
 * @description: Development mode
 */
export const devMode = 'development'

/**
 * @description: Production mode
 */
export const prodMode = 'production'

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevelopmentMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a dev mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.MODE === 'dev'
}

/**
 * @description: Is it a uat mode
 * @returns:
 * @example:
 */
export function isUatMode(): boolean {
  return import.meta.env.MODE === 'uat'
}

/**
 * @description: Is it a test mode
 * @returns:
 * @example:
 */
export function isTestMode(): boolean {
  return import.meta.env.MODE === 'test'
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}

export function getEevUrl(api: string = 'centerapi') {
  let url = ''
  if (isProdMode())
    url = `https://${api}.gotofreight.com`

  if (isUatMode())
    url = `https://${api}.uat.shijizhongyun.com`

  if (isTestMode())
    url = `https://${api}.test.shijizhongyun.com`

  if (isDevMode())
    url = `https://${api}.dev.shijizhongyun.com`

  if (isDevelopmentMode()) {
    const envkey = getStorage('debug_server') || 'dev'
    if (envkey === 'prod')
      url = `https://${api}.gotofreight.com`
    else url = `https://${api}.${envkey}.shijizhongyun.com`
  }
  return url
}

export function getConfigFileName(env: Record<string, any>) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '')
}

export function getAppEnvConfig() {
  // const ENV_NAME = getConfigFileName(import.meta.env);
  // const ENV: GlobEnvConfig = (import.meta.env.DEV ? import.meta.env : window[ENV_NAME as any]) as unknown as GlobEnvConfig
  const ENV: GlobEnvConfig = import.meta.env as unknown as GlobEnvConfig

  const {
    VITE_DEV_LOGIN,
    VITE_DEV_PROXY,
    VITE_LOGIN_URL,
    VITE_COOKIE_DOMAIN,
    VITE_LOGIN_URL_PORT,
  } = ENV

  return {
    VITE_DEV_LOGIN,
    VITE_DEV_PROXY,
    VITE_LOGIN_URL,
    VITE_COOKIE_DOMAIN,
    VITE_LOGIN_URL_PORT,
  }
}
