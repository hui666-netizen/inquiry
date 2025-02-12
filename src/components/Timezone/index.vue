<script lang="ts" setup>
import { subtract } from '@sjzy/calc'

const props = defineProps({
  modelValue: {
    type: Number,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: number | undefined]
}>()
const timeZone = reactive<{
  sign: number | undefined
  hour: number | undefined
  minute: string | undefined
}>({
  sign: undefined,
  hour: undefined,
  minute: undefined,
})
watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined && val !== null) {
      // 转换成三个值date.date是否正数，正数设置为1，负数为-1
      timeZone.sign = val >= 0 ? 1 : -1
      // 获取val小数点前和小数点后的数字
      const time = Math.abs(val)
      const hh = Math.floor(time)
      const mm = Math.floor(subtract(time, hh) * 100)

      timeZone.hour = hh
      timeZone.minute = mm.toString().padStart(2, '0')
      console.log(time, 'time', hh, mm, 'hh.mm-modelvbal')
    }
  },
  {
    immediate: true,
  },
)

watch(
  () => timeZone,
  (val) => {
    const hh = val.hour || val.hour === 0 ? val.hour : undefined
    const mm = val.minute ? val.minute : undefined
    console.log(hh, mm, 'hh.mm', val.sign)
    if (val.sign && hh !== undefined && mm !== undefined) {
      const time = Number(`${hh}.${mm}`)
      if (Number.isNaN(time))
        return $baseMessage('请输入正确的时间', 'error')
      emit('update:modelValue', time * val.sign)
      console.log(time * val.sign, '时区：hh.mm')
    }
    else {
      emit('update:modelValue', undefined)
    }
  },
  {
    deep: true,
  },
)
</script>

<template>
  <div class="flex items-center">
    <div class="w-40% flex items-center">
      <div class="mr-1 w-26px text-12px">
        GMT
      </div>
      <ElSelect
        v-model="timeZone.sign"
        class="mr-1"
        style="width: calc(100% - 26px)"
        placeholder=""
      >
        <ElOption :value="1" label="+" />
        <ElOption :value="-1" label="-" />
      </ElSelect>
    </div>
    <div class="w-60% flex items-center">
      <ElSelect v-model="timeZone.hour" filterable style="width: calc(50% - 3px)" placeholder="">
        <ElOption
          v-for="(_, index) in 13"
          :key="index"
          :label="index < 10 ? `0${index}` : index"
          :value="index"
        >
          <template #default>
            {{ index < 10 ? `0${index}` : index }}
          </template>
        </ElOption>
      </ElSelect>
      <div class="w-6px text-center text-12px">
        :
      </div>
      <ElSelect v-model="timeZone.minute" filterable style="width: calc(50% - 3px)" placeholder="">
        <ElOption
          v-for="item in [0, 30]"
          :key="item"
          :label="item < 10 ? `0${item}` : `${item}`"
          :value="item < 10 ? `0${item}` : `${item}`"
        >
          <template #default>
            {{ item < 10 ? `0${item}` : item }}
          </template>
        </ElOption>
      </ElSelect>
    </div>
  </div>
</template>
