import { getEnv } from '../system'

export const DEFAULT_CACHE_TIME = 60 * 60 * 7

export const enableStorageEncryption = getEnv() !== 'development'
