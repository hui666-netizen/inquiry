<script lang="ts" setup>
import { CopyDocument } from '@element-plus/icons-vue'
import type { SjzyPartTableProps } from './type'

defineOptions({
  name: 'SjzyPartTable',
})

/** props */
const props = withDefaults(defineProps<SjzyPartTableProps>(), {})
const emit = defineEmits<{
  'head-click': []
}>()
defineSlots<{
  default: (props: Recordable) => void
  title: () => void
  afterTitle: () => void
  [key: string]: (props: Recordable) => void
}>()

/** 展开收起 */
const visible = ref(true)
/** 配置项 */
const columnsOptions = computed(() => {
  return props.columns.map((item) => {
    return {
      ...item,
    }
  })
})
/**
 * 复制文字
 * @param {string} text 复制文字
 */
async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    $baseMessage('复制成功', 'success')
  }
  catch (err) {}
}
/** 头部点击事件 */
function handleClick() {
  emit('head-click')
}
</script>

<template>
  <div class="sjzy-part-table">
    <div class="sjzy-part-table-title flex items-center" @click="visible = !visible">
      <div class="hover:text-[var(--el-color-primary)] hover:underline" @click.stop="handleClick">
        <slot v-if="$slots.title" name="title" />
        <span v-else>{{ title }}</span>
      </div>
      <SjzyIcon
        icon-font="icon-xiala"
        :size="18"
        class="inline-block color-[var(--sjzy-background-color-disabled)]"
        :class="{
          'rotate-180': visible,
        }"
      />
      <slot v-if="$slots.afterTitle" name="afterTitle" />
    </div>
    <ElCollapseTransition>
      <div v-show="visible" style="overflow: hidden">
        <table v-if="data?.length">
          <tbody>
            <tr v-for="(row, index) in data" :key="index">
              <td
                v-for="col in columnsOptions"
                :key="col.field"
                :class="{ link: col.isLink }"
                :style="{ width: `${col.width}px` }"
                @click="col.onClick?.({ row })"
              >
                <slot v-if="col.slot && $slots[col.slot]" :name="col.slot" v-bind="{ row }" />
                <div
                  v-else-if="col.isLink"
                  class="flex items-center"
                  @mouseenter="row.show = true"
                  @mouseleave="row.show = false"
                >
                  <ElLink type="primary">
                    <a
                      :href="row.link"
                      class="leading-28px"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{{ row.link }}</a>
                  </ElLink>
                  <ElButton
                    v-show="row.show"
                    type="primary"
                    text
                    size="small"
                    @click="copyToClipboard(row.link)"
                  >
                    <ElIcon size="12">
                      <CopyDocument />
                    </ElIcon>
                  </ElButton>
                </div>
                <span v-else>{{ row[col.field] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="p-12px text-center">
          暂无数据
        </div>
      </div>
    </ElCollapseTransition>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-part-table {
  margin-bottom: 12px;
  font-size: var(--sjzy-font-size);
  color: var(--sjzy-font-color);
  border: 2px solid var(--sjzy-part-bg-color);

  .sjzy-part-table-title {
    padding: 5px 10px;
    line-height: 28px;
    cursor: pointer;
    background: var(--sjzy-part-bg-color);
  }

  table {
    width: 100%;

    td {
      min-height: 40px;
      padding: 5px 10px;
    }

    tr {
      transition: all 0.2s ease-in-out;

      &:hover {
        background: #f6f8f8;
      }
    }
  }
}
</style>
