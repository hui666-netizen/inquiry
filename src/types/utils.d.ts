import type { ComputedRef, Ref } from 'vue'

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>
}

export type GlobEnvConfig = {
  VITE_DEV_PROXY: string
  VITE_DEV_LOGIN: boolean
  VITE_LOGIN_URL: string
  VITE_COOKIE_DOMAIN: string
  VITE_LOGIN_URL_PORT: string
}

export type GlobConfig = {
  devProxy: string
  devLogin: boolean | string
  loginUrl: string
  loginPort: number
  loginCookieDomain: string
}
