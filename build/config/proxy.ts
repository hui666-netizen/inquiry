import type { ProxyOptions } from 'vite'

/** 本地接口服务代理 */
export function createViteProxy(): Record<string, string | ProxyOptions> | undefined {
  return {
    '/getList': {
      target: 'https://localhost:3352/',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
    '/setList': {
      target: 'https://localhost:3352/',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
    '/cleanTracingList': {
      target: 'https://localhost:3352/',
      changeOrigin: true,
      secure: false,
    },
    '/getBaseInfo': {
      target: 'https://localhost:3352',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
    '/getAllTracingList': {
      target: 'https://localhost:3352',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
    '/trackweb': {
      target: 'https://localhost:3352',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
    '/getSourceMap': {
      target: 'https://localhost:3352/',
      changeOrigin: true, //  target是域名的话，需要这个参数，
      secure: false,
    },
  }
}
