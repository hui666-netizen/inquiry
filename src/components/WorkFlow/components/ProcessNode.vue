<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { ElInput } from 'element-plus'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import { SjzyButton } from '@sjzy/ui'
import { set } from 'lodash-es'
import type { IAction, IActionType, IFlowRow } from '../types'
import { isEndNode, isStartNode } from '../hooks/useFlowModel'

const props = withDefaults(
  defineProps<{
    /** 节点ID */
    id: string
    /** 当前节点是否选中 */
    selected?: boolean
  }>(),
  {},
)

const emit = defineEmits<{
  /** 复制节点 */
  'copy-node': []
  /** 添加子节点 */
  'add-child': []
  /** 添加父节点 */
  'add-parent': []
  /** 删除节点 */
  'del-node': []
}>()

/** 是否开始节点 */
const isStartNodeFlag = isStartNode(props.id)
/** 是否结束节点 */
const isEndNodeFlag = isEndNode(props.id)
/** 当前节点数据 */
const nodeData = defineModel<IFlowRow>({ default: { node: {} } })
/** 是否编辑模式 */
const isEdit = ref(false)
/** 操作栏 */
const actions = computed(() => {
  const arr: IAction[] = [
    {
      label: '重命名',
      icon: 'Edit',
      type: 'edit',
      show: !isStartNodeFlag && !isEndNodeFlag,
    },
    {
      label: '复制',
      subLabel: 'Ctrl + C',
      icon: 'Copy',
      type: 'copy',
      show: !isStartNodeFlag && !isEndNodeFlag,
    },
    {
      label: '添加子节点',
      icon: 'addChild',
      type: 'addChild',
      show: !isEndNodeFlag,
    },
    {
      label: '添加父节点',
      icon: 'addParent',
      type: 'addParent',
      show: !isStartNodeFlag,
    },
    {
      label: '删除',
      subLabel: 'Delete',
      icon: 'Delete',
      type: 'delete',
      show: !isStartNodeFlag && !isEndNodeFlag,
    },
  ]
  return arr.filter(i => i.show)
})
/** 输入框Ref */
const inputRef = ref<InstanceType<typeof ElInput>>()
/** node节点ref */
const nodeRef = ref<HTMLElement>()
/** 输入框宽度 */
const inputWidth = ref<number>(0)

/** 节点双击事件 */
function handleDblClick() {
  isEdit.value = true
  nextTick(() => {
    inputRef.value?.select()
    // inputRef.value?.focus()
  })
}
/** 获取节点宽高 */
function nodeInfo() {
  return nodeRef.value?.getBoundingClientRect() || { width: 0, height: 0 }
}
/** 输入框失焦事件 */
function handleInputBlur() {
  isEdit.value = false
  nextTick(() => {
    inputWidth.value = nodeInfo().width / 2
  })
}
/** 节点操作 */
function handleAction(action: IActionType) {
  switch (action) {
    case 'edit':
      handleDblClick()
      break
    case 'addChild':
      emit('add-child')
      break
    case 'addParent':
      emit('add-parent')
      break
    case 'copy':
      emit('copy-node')
      break
    case 'delete':
      emit('del-node')
      break
  }
}
/** 关闭右键菜单 */
function handleClickoutToolbar() {
  nodeData.value.node.isToolBarVisible = false
}

/** 节点名称更新到node对象 */
watch(
  () => nodeData.value.node?.node_name,
  (val) => {
    set(nodeData.value, 'setting_config.basic.node_name', val)
  },
)

onMounted(() => {
  setTimeout(() => {
    inputWidth.value = nodeInfo().width / 2
  }, 100)
})

watchEffect(() => {
  if (nodeData.value.node.isToolBarVisible) {
    document.body.addEventListener('click', handleClickoutToolbar)
  }
  else {
    document.body.removeEventListener('click', handleClickoutToolbar)
  }
})

defineExpose({
  handleClickoutToolbar,
  handleDblClick,
})
</script>

<template>
  <div class="process-node bg-[var(--sjzy-bg)]" :class="{ isActive: isEdit || selected }">
    <!-- 右键菜单 -->
    <NodeToolbar :is-visible="!!nodeData.node.isToolBarVisible" :position="Position.Right">
      <SjzyButton
        v-for="actionItem in actions"
        :key="actionItem.type"
        link
        @click="handleAction(actionItem.type)"
      >
        <div class="flex justify-between">
          <span class="text-left w-90px!">{{ actionItem.label }}</span><span v-if="actionItem.subLabel">{{ actionItem.subLabel }}</span>
        </div>
      </SjzyButton>
    </NodeToolbar>

    <Handle v-if="!isStartNodeFlag" type="target" :position="Position.Left" />
    <Handle v-if="!isEndNodeFlag" type="source" :position="Position.Right" />

    <div ref="nodeRef" class="node-box min-w-50px overflow-hidden rounded-4px">
      <div class="h-32px flex items-center justify-center">
        <ElInput
          v-if="isEdit"
          ref="inputRef"
          v-model.change="nodeData.node.node_name"
          size="small"
          class="label-input z-9999999 h-100%"
          :style="{ width: `${inputWidth}px` }"
          autofocus
          @blur="handleInputBlur"
        />
        <span v-else class="p-x-5px">{{ nodeData.node.node_name }}</span>
      </div>
      <!-- <pre>
          {{ data }}
        </pre> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.process-node {
  border: 1px solid #4d4e4e;
  border-radius: 2px;

  &.isActive {
    border-color: var(--el-color-primary);
  }

  :deep() {
    .label-input {
      .el-input__wrapper {
        padding: 0 5px;
        box-shadow: none;
      }
    }
  }
}
</style>
