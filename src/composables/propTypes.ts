import VueTypes, { toType } from 'vue-types'

export class propTypes extends VueTypes {
  // define a custom validator that accepts configuration parameters
  static get style() {
    return toType('style', {
      type: [String, Object],
      default: undefined,
    })
  }

  static get VNodeChild() {
    return toType('VNodeChild', {
      default: undefined,
    })
  }
}
