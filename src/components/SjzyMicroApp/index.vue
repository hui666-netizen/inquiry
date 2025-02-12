<script lang="ts" setup>
import MicroApp from '@micro-zoe/micro-app'
import { serializeQuery } from '@sjzy/utils'
import { microApps } from '@/micro/microApps'

defineOptions({
  name: 'SjzyMicroApp',
})

const props = defineProps({
  /** 应用名称 */
  name: propTypes.string.def(''),
  /** 默认地址 */
  defaultPage: propTypes.string.def(''),
  /** 携带参数 */
  query: propTypes.object.def({}),
  /** 是否默认执行跳转 */
  isDefaultJump: propTypes.bool.def(true),
})
const emit = defineEmits<{
  'sub-change': [data: any]
}>()

const userStore = useUserStore()
const { subSysId } = userStore
const microAppLoading = ref(true)
const currentApp = computed(() => {
  return microApps.find(i => props?.name.startsWith(i.name))
})

/** 完整的url地址 */
const defaultFullPage = computed(() => {
  let url = `${props.defaultPage}`
  if (props.query)
    url += `?${serializeQuery(props.query)}`

  return url
})

function handleCreated() {
  console.log('%c[micro-app元素被创建]：', 'color:#4ba006', defaultFullPage.value)
  setTimeout(() => {
    handleJump()
  }, 20)
}
function handleBeforemount() {
  console.log('%c[micro-app即将被渲染]：', 'color:#4ba006', props?.name)
}
function handleMounted() {
  console.log('%c[micro-app已经渲染完成]：', 'color:#4ba006', props?.name)
}
function handleUnmount() {
  console.log('%c[micro-app已经卸载]', 'color:#ada582')
  // 移除所有监听事件
  window[`eventCenterFor${props?.name}`].clearDataListener()
}
function handleError() {
  console.log('%c[micro-app渲染出错]', 'color:#cf1306')
}

function handleDataChange(e: CustomEvent): void {
  console.log('[子应用数据变动]:', e.detail.data)
  const data = e.detail.data
  if (data?.isMicroAppDone)
    microAppLoading.value = false

  emit('sub-change', e.detail.data)
}
function afterhidden() {
  console.log('%c已经推入后台', 'color:#ada582')
  microAppLoading.value = true
}
function beforeshow() {
  // console.log('即将推入前台，初始化时不执行')
}
function aftershow() {
  console.log('%c已经推入前台，初始化时不执行', 'color:#ada582')
  if (props.isDefaultJump) {
    setTimeout(() => {
      microAppLoading.value = false
    }, 300)
  }
  else {
    microAppLoading.value = false
  }
}
/** 页面跳转 */
function handleJump() {
  MicroApp.router.push({
    name: props?.name,
    path: defaultFullPage.value,
    replace: true,
  })
}

function handleSetData(data: any) {
  MicroApp?.setData(props?.name, data)
  console.log(data, '=================')
}

defineExpose({
  MicroApp,
  handleSetData,
  handleJump,
})
</script>

<template>
  <div v-loading="microAppLoading" class="SjzyMicroApp">
    <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
    <micro-app
      v-if="defaultFullPage"
      v-bind="{
        ...currentApp,
        ...$attrs,
      }"
      :data="{
        systemId: subSysId,
      }"
      :default-page="defaultFullPage"
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
.SjzyMicroApp {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
