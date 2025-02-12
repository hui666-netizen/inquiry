<script lang="ts" setup>
import ProjectSetting from './components/ProjectSetting.vue'
import { projectDetailType } from '@/views/project/dict'
import avatar from '@/assets/avatar.png'

defineOptions({
  name: 'ProjectDetail',
})

const activeName = ref('setting')
</script>

<template>
  <div class="projectDetail-container">
    <div class="h-full bg-[var(--sjzy-bg)]">
      <div class="flex">
        <div
          class="h-10 flex items-center"
          style="border-bottom: 1px solid var(--el-border-color-light)"
        >
          <img
            class="ml-4 h-6 w-6 border-rd-4px bg-[var(--sjzy-color-primary)]"
            :src="avatar"
            alt="logo"
          >
          <div class="h-6 lh-6" style="border-right: 1px solid var(--el-border-color-light)">
            <div class="ml-2 mr-6 h-6 text-16px c-#202122 font-700 lh-6">
              这是一个项目名称
            </div>
          </div>
        </div>
        <ElTabs v-model="activeName" class="flex-1">
          <ElTabPane
            v-for="item in projectDetailType"
            :key="item.value"
            :label="item.label"
            :name="item.value"
          />
        </ElTabs>
      </div>
      <ProjectSetting v-if="activeName === 'setting'" class="h-[calc(100%-52px)]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectDetail-container {
  width: 100%;
  height: 100%;

  :deep(.el-tabs__item) {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
