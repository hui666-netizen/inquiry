<script lang="ts" setup>
import refreshSvg from '@/assets/svg/refresh.svg?raw'
import { t } from "@/composables"

const $pub: any = inject('$pub')

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)

const { changeLanguageEnumKey, getLanguageEnumKey } = settingsStore

const { updateTime } = inject('getLanguageEnumKey') as { time: Ref<number>, updateTime: () => void }

function refreshRoute() {
  $pub('reload-router-view')
  const str = String(getLanguageEnumKey)?.split('-')[0]
  changeLanguageEnumKey([str, new Date().getTime()].join('-'))
  updateTime()
}

function beforRefesh() {
  if (useIsDirty()) {
    $baseConfirm({
      content: t('您有数据编辑未保存，是否离开？'),
      title: t('温馨提示'),
      onOk: () => {
        refreshRoute()
      },
    })
  }
  else {
    refreshRoute()
  }
}
</script>

<template>
  <ElTooltip effect="dark" :content="t('刷新')" placement="bottom">
    <div
      class="h-full flex cursor-pointer items-center px-10px c-#000 hover:bg-[#f6f6f6] dark:c-#fff dark:hover:bg-[#333] hover:c-$el-color-primary!"
      @click="beforRefesh"
    >
      <SjzyIcon v-if="theme.showRefresh" :icon="refreshSvg" is-custom-svg :size="16" />
    </div>
  </ElTooltip>
</template>
