import dayjs from 'dayjs'

/** 项目构建时间 */
const PROJECT_BUILD_TIME = JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'))

export function setupViteDefine(viteEnv: ImportMetaEnv, command?: CommandType) {
  console.log('viteEnv', viteEnv)
  console.log('command', command)
  return {
    PROJECT_BUILD_TIME,
    __DEV__: viteEnv.VITE_DEV_PROXY === 'development' ? `true` : `false`,
    __SSR__: `true`,
    __COMPAT__: `false`,
    __FEATURE_SUSPENSE__: `true`,
    __FEATURE_PROD_DEVTOOLS__: `false`,
  }
}
