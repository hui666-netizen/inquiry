<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('page')

const propsData = reactive({
  showSwitch: true /* 是否显示switch */,
  moduleId: '1' /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
  addRouteName: 'TerminalSettingsAddForm' /* 列表路由名 */,
  editRouteName: 'TerminalSettingsEditForm' /* 列表路由名 */,
})
</script>

<template>
  <div class="terminalSettings-container flex flex-col">
    <div class="flex-1 overflow-hidden">
      <div class="h-full overflow-auto bg-[var(--sjzy-bg)]">
        <ElTabs v-model="activeName">
          <ElTabPane label="页面管理" name="page">
            <PageManagement v-if="activeName === 'page'" :props-data="propsData" />
          </ElTabPane>
          <ElTabPane label="字段管理" name="field">
            <FieldManagement v-if="activeName === 'field'" :module-id="propsData.moduleId" />
          </ElTabPane>
        </ElTabs>
      </div>
    </div>
  </div>
</template>
