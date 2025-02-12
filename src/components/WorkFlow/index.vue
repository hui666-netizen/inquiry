<!-- eslint-disable complexity -->
<script lang="ts" setup>
import {
  type EdgeChange,
  type NodeChange,
  type NodeMouseEvent,
  Panel,
  VueFlow,
  useVueFlow,
} from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { cloneDeep, uniqWith } from 'lodash-es'
import CustomEdge from './components/CustomEdge.vue'
import ProcessNode from './components/ProcessNode.vue'
import NodeSetting from './components/NodeSetting/index.vue'
import useFlowHotKey from './hooks/useFlowHotKey'
import useFlowModel, {
  defaultEdgeType,
  defaultNodeType,
  defaultPosition,
  isEndNode,
  isStartNode,
} from './hooks/useFlowModel'
import type { IWorkFlowEdge, IWorkFlowNode } from './types'

defineOptions({
  name: 'WorkFlow',
})

const props = withDefaults(
  defineProps<{
    nodesData: IWorkFlowNode[]
  }>(),
  {},
)

/** 节点信息 */
const nodes = ref<IWorkFlowNode[]>([])
/** 连线数据 */
const edges = ref<IWorkFlowEdge[]>([])
/** 当前选中的节点id */
const selectId = ref<string | undefined>()
/** 节点组件ref */
const processNodeRef = ref<{ [key: string]: InstanceType<typeof ProcessNode> }>({})
/** 节点信息组件ref */
const nodeSettingRef = ref<InstanceType<typeof NodeSetting>>()
/** 流程图盒子 */
const vueFlowRef = ref<HTMLElement | null>(null)
/** 自动布局 */
const { layout } = useFlowLayout()
/** useVueFlow */
const {
  fitView,
  onConnect,
  addEdges,
  addNodes,
  onNodesChange,
  onEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  removeEdges,
  removeNodes,
  getSelectedNodes,
} = useVueFlow()

/** 节点操作hooks */
const {
  getMaxId,
  selectNode,
  handleContextMenu,
  handleAddChild,
  handleAddParent,
  handleInsertNode,
  handleDelNode,
  handleCopyNode,
} = useFlowModel({ nodes, selectId, addEdges, addNodes, removeEdges, removeNodes })

/** 键盘快捷键hooks */
const { allNextChanges, handleDestroyKey, handlePaused, handleUnPaused } = useFlowHotKey({
  getMaxId,
  addEdges,
  addNodes,
  removeEdges,
  removeNodes,
  getSelectedNodes,
})

/** 节点点击事件 */
function handleNodeClick(nodeMouse: NodeMouseEvent) {
  selectId.value = nodeMouse.node.id
}
/** 节点双击事件 */
function handleNodeDblClick(nodeMouse: NodeMouseEvent) {
  selectId.value = nodeMouse.node.id
  if (isStartNode(nodeMouse.node.id) || isEndNode(nodeMouse.node.id))
    return
  processNodeRef.value[`ref_${selectId.value}`]?.handleDblClick()
}
/** 获取节点数据 */
async function getNodes() {
  // 先校验
  const flag = await nodeSettingRef.value?.handleValidate?.()
  // console.log(flag, 'flag')
  if (flag || flag === undefined) {
    // 先清除所有节点的上下游线数据集
    nodes.value.forEach((item) => {
      if (item.data) {
        item.data.node.prev_node = []
        item.data.node.next_node = []
      }
    })

    // 根据edges线处理数据的上下级
    edges.value.forEach((item) => {
      const sourceNode = nodes.value.find(i => i.id === item.source)
      const targetNode = nodes.value.find(i => i.id === item.target)
      if (sourceNode && targetNode) {
        sourceNode.data?.node.next_node?.push(targetNode.id)
        targetNode.data?.node.prev_node?.push(sourceNode.id)
      }
    })

    return nodes.value
  }
  else {
    return false
  }
}
/** 自适应布局 */
async function layoutGraph(direction = 'LR') {
  nodes.value = layout(nodes.value, edges.value, direction)
  nextTick(() => {
    fitView()
  })
}
/** 鼠标移入事件 */
function paneMouseEnter(_pointerEvent: MouseEvent) {
  handleUnPaused()
}
/** 鼠标已开事件 */
function paneMouseLeave(_pointerEvent: MouseEvent) {
  handlePaused()
}

watch(
  () => props.nodesData,
  (val) => {
    nodes.value = val ? cloneDeep(val) : []
    const arr: IWorkFlowEdge[] = []
    nodes.value?.forEach((item) => {
      item.type = defaultNodeType
      item.position = item.position ? item.position : defaultPosition
      item.data?.node.prev_node?.forEach((i) => {
        arr.push({
          id: `${i}_${item.id}`,
          source: `${i}`,
          target: `${item.id}`,
          type: defaultEdgeType,
        })
      })
      item.data?.node.next_node?.forEach((i) => {
        arr.push({
          id: `${item.id}_${i}`,
          source: `${item.id}`,
          target: `${i}`,
          type: defaultEdgeType,
        })
      })
    })
    edges.value = uniqWith(arr, (curval, othVal) => {
      return curval.id === othVal.id
    })
  },
  {
    immediate: true,
    deep: true,
  },
)

/** 节点改变回调 */
onNodesChange(async (changes: (NodeChange & { item?: any })[]) => {
  const nextChanges = []
  for (const change of changes) {
    if (change.type === 'remove') {
      // 开始、结束节点不允许删除
      if (['1', '999'].includes(change.id))
        return
    }
    // 如果是撤销就不进行记录
    if (change?.item?.isReset) {
      const node = nodes.value?.find(i => i.id === change?.item?.id)
      delete node?.isReset
    }
    else {
      nextChanges.push(change)
    }
  }

  // 添加记录
  const actionArr = nextChanges
    ?.filter((i: any) => ['add', 'remove'].includes(i.type))
    ?.map(j => ({ ...j, action: 'node' }))
  allNextChanges.value = [...actionArr, ...allNextChanges.value]
  applyNodeChanges(nextChanges)
})
/** 连线改变回调 */
onEdgesChange((changes: (EdgeChange & { item?: any })[]) => {
  const nextChanges = []
  for (const change of changes) {
    if (change?.item?.isReset) {
      const edge = edges.value?.find(i => i.id === change?.item?.id)
      delete edge?.isReset
    }
    else {
      nextChanges.push(change)
    }
  }
  const actionArr = nextChanges
    ?.filter((i: any) => ['add', 'remove'].includes(i.type))
    ?.map(j => ({ ...j, action: 'edge' }))
  allNextChanges.value = [...actionArr, ...allNextChanges.value]

  applyEdgeChanges(nextChanges)
})
/** 连线回调 */
onConnect(params =>
  addEdges([{ ...params, id: `${params.source}-${params.target}`, type: defaultEdgeType }]),
)

onUnmounted(() => {
  handleDestroyKey()
})

onDeactivated(() => {
  handleDestroyKey()
})

defineExpose({
  getNodes,
  layoutGraph,
})
</script>

<template>
  <div class="h-100% w-100% flex">
    <div ref="vueFlowRef" class="h-100% flex-1">
      <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        :default-viewport="{ zoom: 1, x: 0, y: 0 }"
        :fit-view-on-init="true"
        :zoom-on-double-click="false"
        :nodes-draggable="true"
        :nodes-connectable="true"
        delete-key-code="Delete"
        :apply-default="false"
        class="vue-flow-box bg-white"
        :pan-on-drag="false"
        @nodes-initialized="layoutGraph('LR')"
        @node-click="handleNodeClick"
        @node-double-click="handleNodeDblClick"
        @node-context-menu="handleContextMenu"
        @pane-mouse-enter="paneMouseEnter"
        @pane-mouse-leave="paneMouseLeave"
      >
        <!-- 自定义节点 -->
        <template #node-custom="nodeProps">
          <ProcessNode
            :id="nodeProps.id"
            :ref="
              (el) =>
                (processNodeRef[`ref_${nodeProps.id}`] = el as InstanceType<typeof ProcessNode>)
            "
            v-model="nodeProps.data"
            :selected="nodeProps.selected || selectId === nodeProps.id"
            @add-child="handleAddChild(nodeProps)"
            @add-parent="handleAddParent(nodeProps)"
            @del-node="handleDelNode(nodeProps)"
            @copy-node="handleCopyNode(nodeProps)"
          />
        </template>
        <!-- 自定义线 -->
        <template #edge-custom="customEdgeProps">
          <CustomEdge
            :id="customEdgeProps.id"
            :selected="customEdgeProps.selected"
            :source-x="customEdgeProps.sourceX"
            :source-y="customEdgeProps.sourceY"
            :target-x="customEdgeProps.targetX"
            :target-y="customEdgeProps.targetY"
            :source-position="customEdgeProps.sourcePosition"
            :target-position="customEdgeProps.targetPosition"
            :data="customEdgeProps.data"
            :marker-end="customEdgeProps.markerEnd"
            :style="customEdgeProps.style"
            @insert-node="handleInsertNode(customEdgeProps)"
          />
        </template>
        <!-- 背景 -->
        <Background />

        <!-- 工具栏 -->
        <Controls position="top-right">
          <ControlButton title="Reset Transform" @click="layoutGraph('LR')">
            <SjzyIcon icon-font="icon-a-shuaxin4" :size="12" />
          </ControlButton>
        </Controls>

        <!-- 面板工具 -->
        <Panel position="top-left">
          <ElTooltip effect="dark" placement="bottom">
            <div>
              <SjzyIcon icon-font="icon-bangzhu" :size="16" />
            </div>
            <template #content>
              <div>
                <p>
                  <span class="color-[var(--sjzy-color-warning)] font-bold">空格 Space</span> → 平移
                </p>
                <p>
                  <span class="color-[var(--sjzy-color-warning)] font-bold">鼠标右键</span> → 菜单
                </p>
                <p>
                  <span class="color-[var(--sjzy-color-warning)] font-bold">鼠标滚轮</span> → 缩放
                </p>
              </div>
            </template>
          </ElTooltip>
        </Panel>
      </VueFlow>
    </div>

    <div class="w-300px">
      <NodeSetting ref="nodeSettingRef" v-model="selectNode.data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .vue-flow__node-toolbar {
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #2d3748;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    .sjzy-button {
      --el-button-hover-link-text-color: var(--sjzy-color-white);
      --el-button-text-color: var(--sjzy-font-color-4);
      --el-button-active-color: var(--sjzy-color-white);
      display: flex;
      justify-content: start;
      width: 100%;
      padding: 8px 10px;
      margin: 0;
    }
  }

  .vue-flow__panel {
    display: flex;
    align-items: center;

    .vue-flow__controls {
      border: 1px solid #fffffb;

      .vue-flow__controls-button {
        border: none;
        border-right: 1px solid #eee;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
