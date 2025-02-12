<script setup lang="ts">
import { isFunction } from '@sjzy/utils'

type IProps = {
  tabsList: any[]
  modelValue: any
  labelField?: any
  valueField?: any
  beforeLeave?: (arg?: any) => Promise<boolean>
}
const props = withDefaults(defineProps<IProps>(), {
  labelField: 'label',
  valueField: 'value',
})

const emit = defineEmits<{
  'change': [id: Recordable]
  'update:modelValue': [value: any]
}>()
async function onTabClick(tab: Recordable) {
  const { beforeLeave, valueField, modelValue } = props
  if (tab[valueField] !== modelValue) {
    if (!beforeLeave || !isFunction(beforeLeave)) {
      emit('update:modelValue', tab[valueField])
      emit('change', tab)
    }
    else {
      const bool = await beforeLeave()
      if (bool) {
        emit('update:modelValue', tab[valueField])
        emit('change', tab)
      }
    }
  }
}
</script>

<template>
  <div class="SjzyTabsButton bg-#F0F3F6 p-2px">
    <div class="h-100% flex items-center">
      <div
        v-for="(tab, index) in tabsList"
        :key="index"
        class="m-x-4px cursor-pointer px-10px py-4px"
        :class="
          modelValue === tab[valueField] ? 'bg-#fff color-$el-color-primary' : 'color-#8A9298'
        "
        @click="onTabClick(tab)"
      >
        <span>{{ tab[labelField] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.SjzyTabsButton {
  height: 100%;
  font-size: 12px;
}
</style>
