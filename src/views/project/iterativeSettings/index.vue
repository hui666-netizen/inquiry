<script lang="ts" setup>
import { ref } from 'vue'
import CategoryManagement from './category/index.vue'
import FlowManagement from './workflow/index.vue'

defineOptions({
  name: 'IterativeSettings',
})

const route = useRoute()
const activeName = ref('category')

const propsData = reactive({
  showSwitch: false /* 是否显示switch */,
  moduleId: '4' /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
  addRouteName: 'IterativeSettingsAddForm' /* 表单路由名 */,
  editRouteName: 'IterativeSettingsEditForm' /* 表单路由名 */,
})

onMountedOrActivated(() => {
  if (route.query?.type) {
    activeName.value = route.query?.type as string
  }
})
</script>

<template>
  <div class="terminalSettings-container flex flex-col">
    <div class="flex-1 overflow-hidden">
      <div class="h-full overflow-auto bg-[var(--sjzy-bg)]">
        <ElTabs v-model="activeName">
          <ElTabPane label="类别管理" name="category">
            <CategoryManagement v-if="activeName === 'category'" />
          </ElTabPane>
          <ElTabPane label="页面管理" name="page">
            <PageManagement v-if="activeName === 'page'" :props-data="propsData" />
          </ElTabPane>
          <ElTabPane label="字段管理" name="field">
            <FieldManagement v-if="activeName === 'field'" :module-id="propsData.moduleId" />
          </ElTabPane>
          <ElTabPane label="流程管理" name="flow">
            <FlowManagement v-if="activeName === 'flow'" :module-id="propsData.moduleId" />
          </ElTabPane>
        </ElTabs>
      </div>
    </div>
  </div>
</template>
