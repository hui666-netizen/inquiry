<script setup lang="ts">
import { BaseEdge, EdgeLabelRenderer, type Position, getBezierPath } from '@vue-flow/core'
import { computed } from 'vue'
import { SjzyButton } from '@sjzy/ui'

const props = withDefaults(
  defineProps<{
    id: string
    sourceX: number
    sourceY: number
    targetX: number
    targetY: number
    sourcePosition: Position
    targetPosition: Position
    data?: any
    markerEnd?: string
    style?: any
    selected?: boolean
    animated?: boolean
  }>(),
  {
    data: () => ({}),
    markerEnd: '',
    style: () => ({}),
    selected: false,
    animated: false,
  },
)

const emit = defineEmits<{
  /** 插入节点 */
  'insert-node': []
}>()

const path = computed(() => getBezierPath(props))
</script>

<template>
  <BaseEdge
    :id="id"
    :style="{ ...style, stroke: selected ? 'var(--el-color-primary)' : '' }"
    :path="path[0]"
    :marker-end="markerEnd"
    :label-x="path[1]"
    :label-y="path[2]"
    :label-style="{ fill: 'white' }"
    :label-show-bg="true"
    :label-bg-style="{ fill: 'red' }"
    :label-bg-padding="[2, 4]"
    :label-bg-border-radius="2"
  />

  <EdgeLabelRenderer v-if="selected">
    <SjzyButton
      type="primary"
      link
      class="bg-white p-0!"
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
        background: '#fff',
        padding: 0,
        borderRadius: '50%',
      }"
      @click="emit('insert-node')"
    >
      <SjzyIcon icon-font="icon-tianjia1" :size="12" />
    </SjzyButton>
  </EdgeLabelRenderer>
</template>
