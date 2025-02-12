import type { VNodeChild, PropType as VuePropType } from 'vue'
import type { SjzyTable } from '@sjzy/ui'
import type SjzyTablePro from '@/components/SjzyTablePro/src/SjzyTablePro.vue'
import type FeishuCustomProfile from '@/components/FeishuCustomProfile/index.vue'
import type { HttpResponse } from '@/utils/http/types'

/** 通用类型 */
declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void]
}

declare global {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface Window {
    dirtyOkCallback?: () => void
    /** 判断应用是否是主应用 */
    __MICRO_APP_BASE_APPLICATION__?: boolean
    /** 是否在微前端环境中 */
    __MICRO_APP_ENVIRONMENT__?: boolean
    /** 应用名称 */
    __MICRO_APP_NAME__?: string
    /** 子应用的静态资源前缀 */
    __MICRO_APP_PUBLIC_PATH__?: string
    /** 子应用的基础路由 */
    __MICRO_APP_BASE_ROUTE__?: string
    /** 子应用的window */
    rawWindow: {
      [key: string]: any
    }
    [key: string]: any
  }

  declare type globalPropertiesType = {
    $pub: (...args: any[]) => void
    $sub: () => void
    $unsub: () => void
  }

  declare type Array<T> = {
    findLastIndex: (
      predicate: (value: T, index: number, obj: T[]) => unknown,
      thisArg?: any
    ) => number
    findLast: <S extends T>(
      predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
      thisArg?: any
    ) => S | undefined
    findLast: (
      predicate: (value: T, index: number, obj: T[]) => unknown,
      thisArg?: any
    ) => T | undefined
  }

  // vue
  declare type ComponentInternalInstance = {
    ctx: any
  }

  type DtoTrans<T> = T extends { code?: any }
    ? T extends { data?: any }
      ? T extends { msg?: any }
        ? T['data']
        : T
      : T
    : T

  declare type UserModule = (ctx: any) => void

  declare type PropType = VuePropType<T>

  declare type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  declare type Nullable<T> = T | null

  declare type NonNullable<T> = T extends null | undefined ? never : T

  declare type Recordable<T = any> = Record<string, T>

  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }

  declare type Indexable<T = any> = {
    [key: string]: T
  }

  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }

  declare type InitDirtyParams = {
    formData: Ref<Recordable> | Recordable
    defaultFormData?: Recordable
    notNullToFalse?: string[]
    excludeAll?: string[]
  }
  declare type SetDirtyFn = (istDirty: boolean, obj?: Recordable) => void

  declare type TimeoutHandle = ReturnType<typeof setTimeout>

  declare type IntervalHandle = ReturnType<typeof setInterval>

  declare type ChangeEvent = Event & {
    target: HTMLInputElement
  }

  declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null

  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

  declare type EmitType = (event: string, ...args: any[]) => void

  declare type TargetContext = '_self' | '_blank'

  declare type Fn<T = any, R = T> = {
    (...arg: T[]): R
  }

  declare type PromiseFn<T = any, R = T> = {
    (...arg: T[]): Promise<R>
  }

  declare type RefType<T> = T | null

  declare type SjzyTableRef = RefType<InstanceType<typeof SjzyTable>>

  declare type SjzyTableProps = InstanceType<typeof SjzyTable>['$props']

  declare type SjzyTableProRef = RefType<InstanceType<typeof SjzyTablePro>>

  declare type SjzyTableProProps = InstanceType<typeof SjzyTablePro>['$props']

  declare type FeishuCustomProfileRef = RefType<InstanceType<typeof FeishuCustomProfile>>
  declare type FeishuCustomProfileProps = InstanceType<typeof FeishuCustomProfile>['$props']

  declare type ViteEnv = {
    VITE_DEV_PROXY: string
    VITE_DEV_LOGIN: boolean
  }

  declare type NetConfig = {
    fs_login_appid: string
    fs_login_secret?: string
    [key: string]: string | boolean
  }

  declare type HttpResponseData<T = unknown> = {
    code: number
    message: string
    data: T
  }

  declare type HttpDataReturnType<U> =
    ReturnType<U> extends Promise<infer T>
      ? T extends HttpResponse<infer K>
        ? K extends HttpResponseData<infer J>
          ? J
          : never
        : never
      : never
}

declare module 'vue-router' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface HistoryState {
    dirtyOkCallback?: () => void
  }
}
