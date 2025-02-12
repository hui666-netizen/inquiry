<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import Nprogress from 'nprogress'
import { SjzyKeepAlive } from '@sjzy/ui'
import config from '@/config'
import { handleActivePath } from '@/router'
import type { RouteRecord, SjzyRoute } from '@/types/router'

const route = useRoute() as SjzyRoute
const $sub: any = inject('$sub')
const $unsub: any = inject('$unsub')

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)
const tabsStore = useTabsStore()
const { getVisitedRoutes: visitedRoutes } = storeToRefs(tabsStore)

const componentRef = ref<VNode>()
const routerKey = ref<string | null>(null)
const keepAliveKeyList = ref<string[]>([])
const keepAliveNameList = ref<string[]>([])

const siteData = reactive({
  description: '',
})
useHead({
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description),
    },
  ],
})

function updateKeepAliveNameList(refreshRouteName = null) {
  keepAliveNameList.value = visitedRoutes.value
    .filter((item: RouteRecord) => !item.meta.noKeepAlive && item.name !== refreshRouteName)
    .flatMap((item: RouteRecord) => item.name)
  keepAliveKeyList.value = visitedRoutes.value
    .filter((item: RouteRecord) => !item.meta.noKeepAlive && item.name !== refreshRouteName)
    .flatMap((item: RouteRecord) => item.path)
}

// 更新KeepAlive缓存页面
watchEffect(() => {
  routerKey.value = handleActivePath(route, true)
  updateKeepAliveNameList()
  siteData.description = `DevOPS-${route.meta.title}`
})

$sub('reload-router-view', (refreshRouteName: any = route.name) => {
  if (theme.value.showProgressBar)
    Nprogress.start()
  const cacheActivePath = routerKey.value
  routerKey.value = null
  updateKeepAliveNameList(refreshRouteName)
  nextTick(() => {
    routerKey.value = cacheActivePath
    updateKeepAliveNameList()
  })
  setTimeout(() => {
    if (theme.value.showProgressBar)
      Nprogress.done()
  }, 200)
})

onUnmounted(() => {
  $unsub('reload-router-view')
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <SjzyKeepAlive
      :include="keepAliveNameList"
      :include-key="keepAliveKeyList"
      :max="config.keepAliveMaxNum"
    >
      <Component :is="Component" v-if="routerKey" :key="routerKey" ref="componentRef" />
    </SjzyKeepAlive>
  </RouterView>
</template>
