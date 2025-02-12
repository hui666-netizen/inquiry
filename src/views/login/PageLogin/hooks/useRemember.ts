import { createStorage } from '@sjzy/utils'
import config from '@/config'
import { CacheTypeEnum } from '@/utils/cache/cacheEnum'
import type { BasicKeys } from '@/utils/cache'
import { DEFAULT_CACHE_TIME, enableStorageEncryption } from '@/utils/cache/config'

const isLocal = config.storage === CacheTypeEnum.LOCAL

const ls = createStorage(localStorage, {
  prefixKey: '',
  hasEncrypt: enableStorageEncryption,
  timeout: DEFAULT_CACHE_TIME,
})

const ss = createStorage(sessionStorage, {
  prefixKey: '',
  hasEncrypt: enableStorageEncryption,
  timeout: DEFAULT_CACHE_TIME,
})

export function getAuthRememberMe(key: BasicKeys) {
  return isLocal ? ls.get(key) : ss.get(key)
}

export function setAuthRememberMe(key: BasicKeys, value: any) {
  return isLocal ? ls.set(key, value) : ss.set(key, value)
}
export function clearAuthRememberMe() {
  isLocal ? ls.clear() : ss.clear()
}
