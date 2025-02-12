<script setup lang="ts">
type MsgType = {
  key: number
  value: string
}

const message = ref<MsgType[] | undefined>([])

function add(item: MsgType) {
  message.value?.push(item)
  message.value = message.value?.filter((item, index) => {
    return message.value?.findIndex(obj => obj.key === item.key) === index
  })
}
// 根据key删除
function del(key: number) {
  message.value = message.value?.filter(item => item.key !== key)
}

defineExpose({
  add,
  del,
})
</script>

<template>
  <div v-if="message && message.length > 0" class="msg_top">
    <div class="absolute left-0 top-0 h-full w-3px bg-#EC4646" style="border-radius: 4px 0 0 4px" />
    <div v-for="item in message" :key="item.key" class="lh-17px">
      {{ item.value }}
    </div>
  </div>
</template>

<style lang="scss">
.msg_top {
  font-size: 12px;
  background-color: rgba(236, 70, 70, 0.1);

  @apply c-#EC4646 px-17px mb-5px py-4px relative rd-4px;
}
</style>
