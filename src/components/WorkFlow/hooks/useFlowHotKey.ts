import { useClipboard } from '@vueuse/core'
import type {
  AddEdges,
  AddNodes,
  EdgeChange,
  GraphNode,
  NodeChange,
  RemoveEdges,
  RemoveNodes,
} from '@vue-flow/core'
import { cloneDeep } from 'lodash-es'
import type { IWorkFlowNodeProps } from '../types'
import useHotKey from './useHotKey'

export function useFlowHotKey({
  getMaxId,
  addEdges,
  addNodes,
  removeEdges,
  removeNodes,
  getSelectedNodes,
}: {
  getMaxId: globalThis.ComputedRef<number>
  addNodes: AddNodes
  addEdges: AddEdges
  removeEdges: RemoveEdges
  removeNodes: RemoveNodes
  getSelectedNodes: globalThis.ComputedRef<GraphNode<any, any, string>[]>
}) {
  /** 节点操作记录 */
  const allNextChanges = ref<
    ((NodeChange & { action?: string }) | (EdgeChange & { action?: string }))[]
      >([])

  /** 复制hooks */
  const { copy, text, isSupported } = useClipboard({
    source: '',
    read: false,
  })

  /** 键盘复制 */
  const keyBordCopy = useHotKey(
    async () => {
      const selectNodes = getSelectedNodes.value?.filter(i => i.id !== '1' && i.id !== '999')
      if (!selectNodes?.length)
        return
      if (!isSupported) {
        $baseMessage('浏览器不支持', 'error')
      }
      await copy(JSON.stringify(selectNodes))
    },
    {
      key: 'c',
      ctrlKey: true,
      directions: '复制',
    },
  )
  /** 键盘粘贴 */
  const keyBordPaste = useHotKey(
    () => {
      if (!text.value)
        return
      const selectNodes: IWorkFlowNodeProps[] = JSON.parse(text.value) || []
      if (!selectNodes.length)
        return
      const newNodes = selectNodes.map((node, index) => {
        const id = String(getMaxId.value + index + 1)
        const newNode = cloneDeep(node)
        newNode.id = id
        newNode.data.node.row_id = id
        newNode.position.x += 20
        newNode.position.y += 20
        return newNode
      })
      // 添加节点
      console.log(newNodes, 'newNodes')
      addNodes(newNodes as any)
    },
    {
      key: 'v',
      ctrlKey: true,
      directions: '粘贴',
    },
  )
  /** 键盘撤销 */
  const keyBordBack = useHotKey(
    () => {
      const nextChange = allNextChanges.value?.shift()
      if (nextChange) {
        if (nextChange.action === 'node') {
          if (nextChange.type === 'add') {
            removeNodes({ ...(nextChange as any).item, isReset: true })
          }
          else if (nextChange.type === 'remove') {
            addNodes({ ...(nextChange as any).item, isReset: true })
          }
        }
        else if (nextChange.action === 'edge') {
          if (nextChange.type === 'add') {
            removeEdges({ ...(nextChange as any).item, isReset: true })
          }
          else if (nextChange.type === 'remove') {
            addEdges({ ...(nextChange as any), isReset: true })
          }
        }
      }
      // console.log(nextChange, 'dangq操作')
      // console.log(allNextChanges.value, '剩余操作')
    },
    {
      key: 'z',
      ctrlKey: true,
      directions: '撤销',
    },
  )
  /** 销毁键盘事件 */
  function handleDestroyKey() {
    keyBordCopy.removeListener?.()
    keyBordPaste.removeListener?.()
    keyBordBack.removeListener?.()
  }
  /** 全部静默 */
  function handlePaused() {
    keyBordCopy.pause?.()
    keyBordPaste.pause?.()
    keyBordBack.pause?.()
  }
  /** 全部关闭静默 */
  function handleUnPaused() {
    keyBordCopy.unpause?.()
    keyBordPaste.unpause?.()
    keyBordBack.unpause?.()
  }

  return {
    allNextChanges,
    handleDestroyKey,
    handlePaused,
    handleUnPaused,
  }
}

export default useFlowHotKey
