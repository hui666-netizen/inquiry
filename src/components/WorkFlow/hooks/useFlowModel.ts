import type {
  AddEdges,
  AddNodes,
  Node,
  NodeMouseEvent,
  RemoveEdges,
  RemoveNodes,
} from '@vue-flow/core'
import { cloneDeep } from 'lodash-es'
import type {
  IFlowRow,
  IWorkFlowEdge,
  IWorkFlowEdgeProps,
  IWorkFlowNode,
  IWorkFlowNodeProps,
} from '../types'

export const defaultNodeType = 'custom'
export const defaultEdgeType = 'custom'
export const defaultPosition = {
  x: 0,
  y: 0,
}

/** 节点初始化数据 */
export function gteInitNodeData(
  maxId: number,
  node_name = '未命名节点',
  nodeType: string = defaultNodeType,
): Node<IFlowRow> {
  /** 当前生成的ID */
  const id = String(maxId + 1)
  return {
    id,
    type: nodeType,
    position: defaultPosition,
    data: {
      node: {
        node_name,
        prev_node: id === '999' ? ['1'] : [],
        next_node: id === '1' ? ['999'] : [],
        row_id: id,
      },
      setting_config: {
        basic: {
          node_name,
          need_fill_time: false,
        },
        node_manger: {
          type: 'unrestricted',
        },
        advanced: {
          is_allow_delete: false,
        },
      },
      node_setting: {
        tasks: [],
        conditions: {},
        audit: {},
      },
    },
  }
}
/** 节点初始化连线数据 */
export function gteInitEdgeData(): IWorkFlowEdge[] {
  return [{ id: '1-999', source: '1', target: '999', type: defaultEdgeType }]
}
/** 节点复制数据 */
export function gteCopyNodeData(maxId: number, node: any): Node<IFlowRow> {
  const newNode = cloneDeep(node) as Node<IFlowRow>
  const id = String(maxId + 1)
  newNode.id = id
  newNode.data!.node.row_id = id
  newNode.position.x += 20
  newNode.position.y += 20
  return newNode
}
/** 是否是开始节点 */
export const isStartNode = (id: string) => Number(id) === 1
/** 是否是结束节点 */
export const isEndNode = (id: string) => Number(id) === 999

export function useFlowModel({
  nodes,
  selectId,
  addEdges,
  addNodes,
  removeEdges,
  removeNodes,
}: {
  nodes: globalThis.Ref<IWorkFlowNode[]>
  selectId: globalThis.Ref<string | undefined>
  addNodes: AddNodes
  addEdges: AddEdges
  removeEdges: RemoveEdges
  removeNodes: RemoveNodes
}) {
  /** 获取所有Id中最大值 */
  const getMaxId = computed(() => {
    return Math.max(...nodes.value.map(ele => Number(ele.id))?.filter(i => i !== 999))
  })
  /** 选中的节点信息 */
  const selectNode = computed({
    get() {
      const node = nodes.value.find(ele => ele.id === selectId.value) || ({} as IWorkFlowNode)
      return new Proxy(node, {
        set(_obj, _name, _val) {
          return true
        },
      })
    },
    set(_value) {
      // console.log(value, 'value++++++++++++')
    },
  })

  /** 节点右键菜单 */
  function handleContextMenu(nodeMouse: NodeMouseEvent) {
    nodeMouse.event.preventDefault()
    selectId.value = nodeMouse.node.id
    nodes.value?.forEach((ele) => {
      ele.data!.node.isToolBarVisible = ele.id === nodeMouse.node.id
    })
  }
  /** 添加子节点 */
  function handleAddChild(node: IWorkFlowNodeProps) {
    const childNode = gteInitNodeData(getMaxId.value)
    // 添加节点
    addNodes(childNode)
    // 添加节点线
    addEdges({
      id: `${node.id}-${childNode.id}`,
      source: node.id,
      target: childNode.id,
      type: defaultEdgeType,
    })
  }
  /** 添加父节点 */
  function handleAddParent(node: IWorkFlowNodeProps) {
    const parentNode = gteInitNodeData(getMaxId.value)
    // 添加节点
    addNodes(parentNode)
    // 添加节点线
    addEdges({
      id: `${parentNode.id}-${node.id}`,
      source: parentNode.id,
      target: node.id,
      type: defaultEdgeType,
    })
  }
  /** 插入节点 */
  function handleInsertNode(edge: IWorkFlowEdgeProps) {
    const { sourceNode, targetNode } = edge
    const insertNode = gteInitNodeData(getMaxId.value)
    // 添加节点
    addNodes(insertNode)
    // 添加节点线
    addEdges({
      id: `${sourceNode.id}-${insertNode.id}`,
      source: sourceNode.id,
      target: insertNode.id,
      type: defaultEdgeType,
    })
    addEdges({
      id: `${insertNode.id}-${targetNode.id}`,
      source: insertNode.id,
      target: targetNode.id,
      type: defaultEdgeType,
    })
    // 删除当前线
    removeEdges(edge.id)
  }
  /** 删除节点 */
  function handleDelNode(node: IWorkFlowNodeProps) {
    removeNodes(node.id)
  }
  /** 复制节点 */
  async function handleCopyNode(node: IWorkFlowNodeProps) {
    const newNode = gteCopyNodeData(getMaxId.value, node)
    // 添加节点
    addNodes(newNode)
  }

  return {
    getMaxId,
    selectNode,
    handleContextMenu,
    handleAddChild,
    handleAddParent,
    handleInsertNode,
    handleDelNode,
    handleCopyNode,
  }
}

export default useFlowModel
