import process from 'node:process'
import type { GenerateServiceProps } from '@sjzy/openapi'
import { sjzyOpenAPIs } from '@sjzy/openapi'
import apiModules from './module'

type ModuleType = {
  prefix: string
  namespace?: string
  url: string
  list: {
    [key: string]: {
      json: string
      routes: string[]
    }
  }
  hook?: { [key: string]: string }
  apifox?: boolean
}
const envs = ['dev', 'test', 'uat']
const env = process.argv[2]
const apis: GenerateServiceProps[] = []
if (!env || !envs.includes(env)) {
  console.error('请传入环境参数如：pnpm openapi dev | test | uat')
}
else {
  apiModules.forEach((module: ModuleType) => {
    for (const item in module.list) {
      if (item) {
        const swagger = module.list[item].json
        const url = module.url.replace(/\$(\d+)/g, () => {
          return env
        })
        let schemaPath = `${url}/${module.prefix}${swagger}`
        if (module.apifox) {
          schemaPath = module.list[item].json
        }
        const openapi: GenerateServiceProps = {
          schemaPath,
          serversPath: `src/api/`,
          projectName: item,
          templateName: 'financeCenter',
          requestLibPath: '@/utils/http/request',
          isTS: true,
          apiPrefix: module.prefix,
          routes: module.list[item].routes || [],
        }
        if (module?.namespace)
          openapi.namespace = module.namespace
        if (module?.hook)
          openapi.hook = module.hook
        apis.push(openapi)
      }
    }
  })
  sjzyOpenAPIs(apis)
}
