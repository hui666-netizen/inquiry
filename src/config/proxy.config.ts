import { getStorage } from '@sjzy/utils'

const NODE_ENV = import.meta.env.MODE
console.log(`node_env ${NODE_ENV}`)

const VITE_BUILDENV = import.meta.env.VITE_BUILDENV
// console.log(`vite_build_env ${VITE_BUILDENV}`)

function getProxy(env: string, type = ''): Record<string, string> {
  const urlObj: Record<string, string> = {}
  const baseUrl = [
    {
      url:
        env === 'prod'
          ? `//centerapi${type}.gotofreight.com`
          : `//centerapi${type}.${env}.shijizhongyun.com`,
      prefix: [
        'trackApi',
        'userApi',
        'payApi',
        'dataCenterApi',
        'interfaceApi',
        'reportApi',
        'customerApi',
        'flowApi',
        'camsApi',
        'contractApi',
        'financeApi',
        'open-apis',
      ],
    },
    {
      url:
        env === 'prod'
          ? `//uploadapi${type}.gotofreight.com`
          : `//uploadapi${type}.${env}.shijizhongyun.com`,
      prefix: ['uploadApi'],
    },
    {
      url:
        env === 'prod'
          ? `//apigateway${type}.gotofreight.com`
          : `//apigateway${type}.${env}.shijizhongyun.com`,
      prefix: ['ant', 'chameleon', 'kitten', 'trainee'],
    },
    {
      url:
        env === 'prod'
          ? `//gateway${type}.gotofreight.com`
          : `//gateway${type}.${env}.shijizhongyun.com`,
      prefix: ['camel'],
    },
    {
      url:
        env === 'prod'
          ? `//devopsapi${type}.gotofreight.com`
          : `//devopsapi${type}.${env}.shijizhongyun.com`,
      prefix: ['devops', 'ossresoure'],
    },
  ]

  baseUrl.forEach(({ prefix, url }) => {
    prefix.forEach((i) => {
      urlObj[i] = url
    })
  })

  return urlObj
}

const config = {
  dev: {
    ...getProxy('dev'),
    is_hb: false, // 是否汇柏
    fs_login_appid: 'cli_a415385a1024100e', // 飞书应用ID
    // micro-app
    microAppCams: '//cams.dev.shijizhongyun.com',
    microAppFmc: '//fmc.dev.shijizhongyun.com',
    microAppMid: '//middlebusiness.dev.shijizhongyun.com',
    microAppCrm: '//crm.dev.shijizhongyun.com',
  },
  test: {
    ...getProxy('test'),
    is_hb: false, // 是否汇柏
    fs_login_appid: 'cli_a415389a66f85013', // 飞书应用ID

    // micro-app
    microAppCams: '//cams.test.shijizhongyun.com',
    microAppFmc: '//fmc.test.shijizhongyun.com',
    microAppMid: '//middlebusiness.test.shijizhongyun.com',
    microAppCrm: '//crm.test.shijizhongyun.com',
  },
  uat: {
    ...getProxy('uat'),
    is_hb: false, // 是否汇柏
    fs_login_secret: 'tbcT2dGE1IwCxqaBlAn1UbIrB17qlNVh', // 飞书应用ID
    fs_login_appid: 'cli_a55ef01c15f2d00c', // 飞书应用ID

    // micro-app
    microAppCams: '//cams.uat.shijizhongyun.com',
    microAppFmc: '//fmc.uat.shijizhongyun.com',
    microAppMid: '//middlebusiness.uat.shijizhongyun.com',
    microAppCrm: '//crm.uat.shijizhongyun.com',
  },
  prod: {
    ...getProxy('prod'),
    is_hb: false, // 是否汇柏
    fs_login_appid: 'cli_a42503bd2c3f100c', // 飞书应用ID

    // micro-app
    microAppCams: '//cams.gotofreight.com',
    microAppFmc: '//fmc.gotofreight.com',
    microAppMid: '//middlebusiness.gotofreight.com',
    microAppCrm: '//crm.gotofreight.com',
  },
} as { [key: string]: NetConfig }

// 根据环境变量 导出对应配置0
// eslint-disable-next-line import/no-mutable-exports
let envConfig = {} as NetConfig
if (NODE_ENV === 'development' || VITE_BUILDENV === 'dev') {
  /**
   * debug_server -> 调试服务器
   * 在开发模式下 为方便调试  开发者可自行修改debug_server 用本地项目连接不同的目标服务器
   * debug_server：dev  开发服务器(默认)
   * debug_server：test 测试服务器
   * debug_server：prod 生产服务器
   */

  let envkey = getStorage('debug_server') || 'dev'
  if (!['dev', 'test', 'hbtest', 'uat', 'hbuat', 'prod'].includes(envkey)) envkey = 'dev'

  envConfig = config[envkey]

  if (envkey === 'dev' || envkey === 'test') {
    // 链接其他服务器
    const userApi_dev_host = getStorage('userApi_dev_host') || ''
    const payApi_dev_host = getStorage('payApi_dev_host') || ''
    const dataCenterApi_dev_host = getStorage('dataCenterApi_dev_host') || ''
    const interfaceApi_dev_host = getStorage('interfaceApi_dev_host') || ''
    const reportApi_dev_host = getStorage('reportApi_dev_host') || ''
    const customerApi_dev_host = getStorage('customerApi_dev_host') || ''
    const flowApi_dev_host = getStorage('flowApi_dev_host') || ''
    const camsApi_dev_host = getStorage('camsApi_dev_host') || ''
    const contractApi_dev_host = getStorage('contractApi_dev_host') || ''
    const financeApi_dev_host = getStorage('financeApi_dev_host') || ''
    const apis_dev_host = getStorage('open-apis_dev_host') || ''

    if (userApi_dev_host) envConfig.userApi = userApi_dev_host
    if (payApi_dev_host) envConfig.payApi = payApi_dev_host
    if (dataCenterApi_dev_host) envConfig.dataCenterApi = dataCenterApi_dev_host
    if (interfaceApi_dev_host) envConfig.interfaceApi = interfaceApi_dev_host
    if (reportApi_dev_host) envConfig.reportApi = reportApi_dev_host
    if (customerApi_dev_host) envConfig.customerApi = customerApi_dev_host
    if (flowApi_dev_host) envConfig.flowApi = flowApi_dev_host
    if (camsApi_dev_host) envConfig.camsApi = camsApi_dev_host
    if (contractApi_dev_host) envConfig.contractApi = contractApi_dev_host
    if (financeApi_dev_host) envConfig.financeApi = financeApi_dev_host
    if (apis_dev_host) envConfig['open-apis'] = apis_dev_host
  }
} else {
  envConfig = config[VITE_BUILDENV]
}

export default envConfig
