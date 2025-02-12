<script lang="ts" setup>
import type { IFlowRow } from '../../types'
import NodeBaseInfo from './NodeBaseInfo.vue'
import CirculationSettings from './CirculationSettings.vue'

defineOptions({
  name: 'NodeSetting',
})
/** 当前tab */
const activeName = ref('base')
/** 绑定的节点数据 */
const nodeData = defineModel<IFlowRow>({
  default: {},
})
/** 节点组件ref */
const nodeBaseInfoRef = ref<InstanceType<typeof NodeBaseInfo>>()

/** 校验 */
function handleValidate() {
  return nodeBaseInfoRef.value?.handleValidate()
}

/** 节点名称更新到node对象 */
watch(
  () => nodeData.value?.setting_config?.basic?.node_name,
  (val) => {
    nodeData.value.node.node_name = val
  },
)

defineExpose({
  handleValidate,
})
</script>

<template>
  <div class="h-100%" style="border-left: 1px solid #d2d9dd">
    <ElTabs v-show="nodeData?.node?.row_id" v-model="activeName" class="node-setting-tabs">
      <ElTabPane label="节点基础设置" name="base">
        <ElScrollbar>
          <NodeBaseInfo ref="nodeBaseInfoRef" v-model="nodeData" />
        </ElScrollbar>
      </ElTabPane>
      <ElTabPane label="流转设置" name="flow">
        <ElScrollbar>
          <CirculationSettings v-model="nodeData" />
        </ElScrollbar>
      </ElTabPane>
    </ElTabs>

    <div v-show="!nodeData?.node?.row_id" class="p-12px">
      请选择节点
    </div>
  </div>
</template>

<style lang="scss">
.node-setting-tabs {
  height: 100%;

  .el-tabs__nav {
    width: 100%;

    .el-tabs__item {
      width: 50%;
      font-size: 14px;
    }
  }

  .border-bottom-1px {
    border-bottom: 1px solid var(--el-border-color-light);
  }

  .el-tabs__content {
    height: calc(100% - 40px);
    overflow: hidden;

    .el-tab-pane {
      height: 100%;
    }
  }
}
</style>
