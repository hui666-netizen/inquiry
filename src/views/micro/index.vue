<script lang="ts" setup>
import MicroApp from '@micro-zoe/micro-app'
import { serializeQuery } from '@sjzy/utils'
import { microApps } from '@/micro/microApps'

defineOptions({
  name: 'MicroAppIndex',
})

const route = useRoute()
const router = useRouter()
const routesStore = useRoutesStore()
const userStore = useUserStore()
const { subSysId } = userStore

const microAppLoading = ref(true)
const tabsStore = useTabsStore()

/** 当前子应用数据 */
const currentAppInfo = computed(() => {
  return microApps.find(i => i.name === routesStore.microSubAppsName)
})

function handleCreated() {
  console.log('%c[micro-app元素被创建]：', 'color:#4ba006', currentAppInfo.value?.name)
}
function handleBeforemount() {
  console.log('%c[micro-app即将被渲染]：', 'color:#4ba006', currentAppInfo.value?.name)
}
function handleMounted() {
  console.log('%c[micro-app已经渲染完成]：', 'color:#4ba006', currentAppInfo.value?.name)
}
function handleUnmount() {
  console.log('%c[micro-app已经卸载]', 'color:#ada582')
  // 移除所有监听事件
  window[`eventCenterFor${currentAppInfo.value?.name}`].clearDataListener()
}
function handleError() {
  console.log('%c[micro-app渲染出错]', 'color:#cf1306')
}

function handleDataChange(e: CustomEvent): void {
  console.log('[子应用数据变动]:', e.detail.data)
  const data = e.detail.data
  if (data?.isMicroAppDone)
    microAppLoading.value = false
}
function afterhidden() {
  console.log('%c已经推入后台', 'color:#ada582')
}
function beforeshow() {
  // console.log('即将推入前台，初始化时不执行')
}
function aftershow() {
  console.log('%c已经推入前台，初始化时不执行', 'color:#ada582')
  microAppLoading.value = false
}

function init() {
  if (window[`eventCenterFor${currentAppInfo.value?.name}`]) {
    // 返回子应用的data数据
    MicroApp.addDataListener(currentAppInfo.value?.name as string, (data: any) => {
      console.log('---[来自子应用的数据]---', data)
    })
  }
}
init()
watch(
  () => route.path,
  (val) => {
    const name = microApps.find(i => val.startsWith(`/${i.name}`))?.name
    if (name) {
      routesStore.setMicroSubAppsName(name)
      const path = val.replaceAll(`/${name}`, '')
      // console.log('%c当前点击跳转的路径', 'color:red', path)
      // console.log('%c当前地址栏microapp应用路径', 'color:red', MicroApp.router.decode(route.query[name] as string))
      const routeMetaQuery: any = route.meta?.query || {}
      const query = { systemId: subSysId, ...route.query, ...routeMetaQuery }
      delete query[name]
      const codeResult = route.query[name] || path
      const encodeResult = MicroApp.router.decode(codeResult as string)
      // const microPath = encodeResult.startsWith(path) ? encodeResult : path
      console.log('%c[子应用路由切换]：', 'color:red', encodeResult)
      // MicroApp.router.setDefaultPage({ name, path: encodeResult })
      setTimeout(() => {
        if (encodeResult) {
          MicroApp.router.push({
            name,
            path: encodeResult.includes('?')
              ? encodeResult
              : `${encodeResult}?${serializeQuery(query)}`,

            replace: true,
          })
        }
      }, 10)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div v-loading="microAppLoading" class="micro-app-wrap">
    <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
    <micro-app
      v-if="currentAppInfo?.name"
      v-bind="currentAppInfo"
      :data="{
        systemId: subSysId,
        systemKey: 'DevOps',
        ...(currentAppInfo?.data || {}),
        mainAppRouter: router,
        tabsStore,
      }"
      class="h-100%"
      @datachange="handleDataChange"
      @created="handleCreated"
      @beforemount="handleBeforemount"
      @mounted="handleMounted"
      @unmount="handleUnmount"
      @error="handleError"
      @afterhidden="afterhidden"
      @beforeshow="beforeshow"
      @aftershow="aftershow"
    />
  </div>
</template>

<style lang="scss" scoped>
.micro-app-wrap {
  width: 100%;
  height: 100%;

  :deep() {
    micro-app,
    micro-app-body {
      height: 100%;
    }
  }
}
</style>
