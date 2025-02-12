<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus'

defineOptions({
  name: 'Region',
})

const props = withDefaults(
  defineProps<{
    list: InquiryApi.inquiryProvince[]
    text: string
  }>(),
  {},
)
/** 定义 emit 事件，'update:list' 的参数类型应为 InquiryApi.inquiryProvince[] */
const emit = defineEmits<{
  'update:list': InquiryApi.inquiryProvince[]
}>()
/** 创建响应式的 list */
const list = ref<InquiryApi.inquiryProvince[]>(props.list)

/** 监听 list 的变化，并在变化时触发 'update:list' 事件 */
watch(list, (newValue: InquiryApi.inquiryProvince[]) => {
  emit('update:list', newValue as InquiryApi.inquiryProvince)
})
</script>

<template>
  <div class="item-box">
    <div class="title-box">
      <div class="log-box" />
      <div class="text-box">
        {{ props.text }}
      </div>
    </div>
    <div class="content-box">
      <VueDraggable
        v-model="list"
        class="main-box"
        :animation="150"
        ghost-class="ghost"
        group="people"
      >
        <div v-for="item in list" :key="item.ProvinceId" class="draggable-box">
          {{ item.ProvinceName }}
        </div>
      </VueDraggable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-box {
  margin-top: 20px;

  .title-box {
    display: flex;

    .log-box {
      width: 3px;
      height: 16px;
      margin-right: 10px;
      background-color: #009ffa;
    }

    .text-box {
      z-index: 1;
      font-size: 14px;
      font-variation-settings: 'opsz' auto;
      font-weight: normal;
      line-height: 16px;
      color: #1c1c1d;
      letter-spacing: 0;
    }
  }

  .content-box {
    height: 338px;
    margin-top: 10px;
    border: 1px solid #ebeff2;

    .main-box {
      display: grid;
      grid-template-rows: repeat(auto-fill, 16.6%);
      grid-template-columns: repeat(auto-fill, 16.6%);
      height: 100%;
      overflow: auto;

      .draggable-box {
        height: 36px;
        margin: 10px;
        line-height: 36px;
        text-align: center;
        cursor: move;
        background-color: #faf7f7;
        border: #e2e4e6 1px solid;
        border-radius: 2px;
      }
    }
  }
}
</style>
