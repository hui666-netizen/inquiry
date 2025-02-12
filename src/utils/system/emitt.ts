import { head, toArray } from 'lodash-es'
import mitt from 'mitt'
// eslint-disable-next-line import/no-mutable-exports
export let gp: globalPropertiesType

export function setupGlobProp(app: any) {
  const _emitter = mitt()

  gp = {
    $pub: (...args: any[]) => {
      _emitter.emit(head(args), args[1])
    },
    $sub() {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply(_emitter.on, _emitter, toArray(arguments))
    },
    $unsub() {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply(_emitter.off, _emitter, toArray(arguments))
    },
  }

  Object.keys(gp).forEach((key) => {
    app.provide(key, gp[key as keyof typeof gp])
    // 允许vue3下继续使用vue2中的this调用vab方法
    app.config.globalProperties[key] = gp[key as keyof typeof gp]
  })
}
