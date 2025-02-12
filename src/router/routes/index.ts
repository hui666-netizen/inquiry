import type { RouteRecord } from '@/types/router'

/** 导入所有模块，并立即执行 */
const modules = import.meta.glob('./modules/*.ts', { eager: true })

/** 将模块列表格式化，并添加到路由记录中 */
function formatModules(_modules: any, result: RouteRecord[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule)
      return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

/** 本地路由 */
export const appRoutes: RouteRecord[] = formatModules(modules, [])
