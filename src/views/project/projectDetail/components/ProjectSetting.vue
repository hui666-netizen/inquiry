<script setup lang="tsx">
import ProjectMember from './ProjectMember.vue'
import { projectSettingType } from '@/views/project/dict'

defineOptions({
  name: 'ProjectSetting',
})

const activeName = ref('member')
</script>

<template>
  <div>
    <div class="mt-3">
      <SjzyTabsButton
        v-model:modelValue="activeName"
        class="mx-3 w-68"
        :tabs-list="projectSettingType"
        label-field="label"
        value-field="value"
      />
    </div>
    <ProjectMember v-if="activeName === 'member'" class="h-[calc(100%-42px)]" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.sjzy-table-v2 .vxe-toolbar) {
  padding: 6px 0;
}
</style>
