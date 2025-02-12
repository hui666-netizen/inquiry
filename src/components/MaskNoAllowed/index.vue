<script lang="ts" setup>
defineOptions({
  name: 'MaskNoAllowed',
})
defineProps({
  text: {
    type: String,
    default: '请先完成前置数据的填写！',
  },
})
</script>

  // {{t(text) }}
<template>
  <div class="maskNoAllowed">

    {{(text) }}
  </div>
</template>

<style lang="scss" scoped>
.maskNoAllowed {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 990;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  letter-spacing: 3px;
  cursor: not-allowed;
  background-color: #fff; /* 背景颜色和不透明度，根据需要进行调整 */
}
</style>
