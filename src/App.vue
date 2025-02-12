<script lang="ts" setup>
const settingsStore = useSettingsStore()
const { setVersion } = settingsStore
setVersion()
const { locale, messages } = useI18n()

const msg = messages.value as any
const localeMsg = msg[locale.value] as any
// const { closeFeishuUser, fsComponentLeft, fsComponentTop } = useUserProfile()
const time = ref(0)
// 刷新按钮触发 重新获取语言包
function updateTime() {
  time.value = new Date()?.getTime()
}

provide('getLanguageEnumKey', {
  time,
  updateTime,
})
provide('formatDate', formatDate)
function formatDate(timestamp: number) {
  if (!timestamp)
    return ''
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())
  const second = padZero(date.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
function padZero(num: any) {
  return num.toString().padStart(2, '0')
}
</script>

<template>
  <ElConfigProvider
    :button="{
      autoInsertSpace: true,
    }"
    :locale="localeMsg"
  >
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component :is="Component" />
      </KeepAlive>
    </RouterView>
  </ElConfigProvider>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  background-color: var(--sjzy-body-bg) !important;
}
</style>
