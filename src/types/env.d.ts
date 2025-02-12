/* eslint-disable ts/consistent-type-definitions */
/**
 *后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - uat: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'uat' | 'prod'

/**
 *编译环境
 * - build: 打包编译
 * - serve: 开发编译
 */
type CommandType = 'build' | 'serve'

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string
  /** 项目开启端口 */
  readonly VITE_REPORT: string
  /** 项目代理环境 */
  readonly VITE_DEV_PROXY: string
  /** 存储的cookie domain */
  readonly VITE_COOKIE_DOMAIN: string
  /** 是否启用gzip或brotli压缩 */
  readonly VITE_BUILD_COMPRESS: string
  /** 配置打包环境变量 */
  readonly VITE_BUILD_ENV: string
}
interface ViteEnv {
  readonly env: ImportMetaEnv
}
