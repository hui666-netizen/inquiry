import type { App, Directive } from 'vue'

const modules = import.meta.glob('./modules/**/*.ts', {
  import: 'default',
  eager: true,
})

/** 安装自定义的vue指令 */
export function setupDirectives(app: App) {
  Object.keys(modules).forEach((key) => {
    const mod = key.replace('./modules/', '').replace('.ts', '')
    app.directive(mod, modules[key] as Directive)
  })
}
