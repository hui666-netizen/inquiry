import type { CustomEvent, Edge, EdgeProps, Node, NodeProps } from '@vue-flow/core'

export type IAction = {
  label: string
  subLabel?: string
  icon: string
  type: IActionType
  show: boolean
}
export type IActionType =
  | 'copy'
  | 'edit'
  | 'delete'
  | 'addChild'
  | 'addParent'
  | 'insertChild'
  | 'insertParent'

/** 节点node信息 */
export type IFlowRowNode = {
  /** 节点名称 */
  node_name: string
  /** 前置节点 */
  prev_node: string[]
  /** 后置节点 */
  next_node: string[]
  /** 节点标识 数字，且当前审批流唯一 1-固定开始节点   9999-固定结束节点 */
  row_id: string
  /** 节点右键菜单 */
  isToolBarVisible?: boolean
}
/** 节点数据 */
export type IFlowRow = {
  node: IFlowRowNode
  setting_config: Record<string, any>
  node_setting: {
    tasks: any[]
    conditions: Record<string, any>
    audit: Record<string, any>
  }
}

/** 节点类型 */
export type IWorkFlowNode = Node<IFlowRow> & {
  /** 节点是否是撤销的 */
  isReset?: boolean
}
export type IWorkFlowNodeProps = NodeProps<IFlowRow, Record<string, CustomEvent>, string>

/** 节点线类型 */
export type IWorkFlowEdge = Edge<IFlowRow> & {
  /** 节点是否是撤销的 */
  isReset?: boolean
}
export type IWorkFlowEdgeProps = EdgeProps<IFlowRow, Record<string, CustomEvent>, string>
