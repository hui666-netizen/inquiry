import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'
import { getDifference, getStorage, randomName } from '@sjzy/utils'
import { onBeforeRouteLeave } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { cloneDeep } from 'lodash-es'

/** 是否已经加载过脏数据检测了（页面多表单时避免加载多次） */
const isDirtyInit = ref(false)
/** 当前页面的路由 */
const route = ref<RouteLocationNormalizedLoaded>()
// 当前页面的所有表单项 脏数据
const pagesFormDirty = reactive<{ [key: string]: any }>({})

/** 当前页面数据是否污染 */
export function useIsDirty() {
  const currentFormDirty = pagesFormDirty[route.value?.fullPath as string]
  return (
    currentFormDirty
    && Object.values(currentFormDirty)?.length
    && Object.values(currentFormDirty).some(i => i)
  )
}
/** 获取所有页面的表单 脏数据 */
export function useGetPagesFormDirty() {
  return pagesFormDirty
}

/** 清除当前页面的脏数据检测 */
export function useClearDirty() {
  pagesFormDirty[route.value?.fullPath as string] = {}
  // 清除当前页面的原生监听
  window.removeEventListener('beforeunload', beforeunloadHandler)
}

/**
 * 导出一个函数，用于判断表单是否脏数据
 * @returns  {object} 返回一个对象，参数如下
 * @property {Ref<boolean} isDirty - 是否数据污染
 * @property {(params: InitDirtyParams, callback?: SetDirtyFn) => void} initDirty - 初始化脏数据检测
 * @property {() => void} stopWatch -停止监听检测
 */
export function useFormDirty(): {
  /** 是否数据污染 */
  isDirty: Ref<boolean>
  /**
   * 开启脏数据检测
   * formData 跟踪监测对象
   * defaultFormData 原始数据对象
   * isDirtRef 数据是否污染
   */
  initDirty: ({ formData, defaultFormData }: InitDirtyParams, fn?: SetDirtyFn) => void
  /** 停止监听检测 */
  stopWatch: () => void
} {
  // 获取当前页面route
  route.value = useRoute()
  /** 抛出去的是否污染可外部使用 */
  const isDirty = ref(false)
  /** 监听体 */
  let stopDataWatch: any = null
  /** 当前表单随机key */
  const nameKey = randomName()
  /** 初始化当前页面 */
  if (!pagesFormDirty[route.value?.fullPath])
    pagesFormDirty[route.value?.fullPath] = {}

  const currentFormDirty = pagesFormDirty[route.value?.fullPath]

  /** 脏数据开启监听 */
  const initDirty = (
    { formData, defaultFormData, notNullToFalse, excludeAll = [] }: InitDirtyParams,
    callback?: SetDirtyFn,
  ) => {
    stopWatch()
    isDirty.value = false
    currentFormDirty[nameKey] = false
    console.log('--脏数据检测初始化--', nameKey, currentFormDirty)
    // 初始化
    callback && callback(currentFormDirty[nameKey])

    // 原始数据
    let originVal: any
    if (defaultFormData)
      originVal = cloneDeep(defaultFormData)
    else originVal = cloneDeep(unref(formData))
    // 开始执行监听函数
    stopDataWatch = watch(
      () => unref(formData),
      (val) => {
        const obj = getDifference(val as { [key: string]: any }, originVal, {
          excludeAll: ['rowId', ...excludeAll],
          notNullToFalse,
        })
        console.log('--脏数据检测数据变动--', obj)
        if (Object.keys(obj).length)
          currentFormDirty[nameKey] = true
        else currentFormDirty[nameKey] = false

        isDirty.value = currentFormDirty[nameKey]
        // console.log(route.value?.fullPath, pagesFormDirty)

        callback && callback(currentFormDirty[nameKey], obj)
      },
      {
        deep: true,
      },
    )
  }
  /** 停止监听 */
  const stopWatch = () => {
    stopDataWatch && stopDataWatch()
    currentFormDirty[nameKey] = false
  }

  /** 监听 */
  onMounted(() => {
    if (!isDirtyInit.value)
      window.addEventListener('beforeunload', beforeunloadHandler)
    else isDirtyInit.value = true
  })
  /** 销毁 */
  onBeforeUnmount(() => {
    stopWatch()
  })

  onUnmounted(() => {
    stopWatch()
  })

  /** 路由离开时提示 */
  onBeforeRouteLeave((to, form, next) => {
    // 如果污染了，并且是第一次（页面多个表单时）触发就提示
    const isDirtyOk = !!getStorage('isDirtyOk')
    if (useIsDirty() && !isDirtyOk) {
      $baseConfirm({
        content: t('您有数据编辑未保存，是否离开？'),
        title: t('温馨提示'),
        onOk: () => {
          useClearDirty()
          stopWatch()
          localStorage.setItem('isDirtyOk', 'true')
          window?.dirtyOkCallback?.()
          window.dirtyOkCallback = undefined
          next()
        },
        onCancel: () => {
          next(false)
        },
      })
    }
    else {
      next()
    }
  })

  return {
    isDirty,
    initDirty,
    stopWatch,
  }
}
/** 如果是有数据变动，浏览器关闭拦截 */
function beforeunloadHandler(event: BeforeUnloadEvent) {
  if (useIsDirty()) {
    event.preventDefault()
    event.returnValue = t('温馨提示')
    return t('温馨提示')
  }
}
