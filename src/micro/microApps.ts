import proxyConfig from '@/config/proxy.config'

const NODE_ENV = import.meta.env.MODE
console.log(`microApp NODE_ENV${NODE_ENV}`)

/** 子应用地址 */
const originConfig: Record<string, string> = {
  microAppFmc: 'https://localhost:15003',
  microAppMid: 'https://localhost:15004',
  microAppCrm: 'https://localhost:15005',
}
/** 线上环境地址 直接取当前应用 部署到二级目录 */
if (NODE_ENV !== 'development') {
  Object.keys(originConfig).forEach((key) => {
    originConfig[key] = proxyConfig[key] as string
  })
}
console.log(`当前环境 ${NODE_ENV}`)
// console.log(`microApps`, originConfig)

/** micro-appp配置 */
const microApps = [
  {
    name: 'microAppFmc',
    baseroute: '/microAppFmc',
    url: originConfig.microAppFmc,
    data: {
      msg: '来自基座的初始化数据',
    },
  },
  {
    name: 'microAppMid',
    baseroute: '/microAppMid',
    url: originConfig.microAppMid,
    data: {
      msg: '来自基座的初始化数据',
    },
  },
  {
    name: 'microAppCrm',
    baseroute: '/microAppCrm',
    url: originConfig.microAppCrm,
    data: {
      msg: '来自基座的初始化数据',
    },
  },
]

export { microApps }
