<script lang="ts" setup>
defineOptions({
  name: 'ProductSettingsEditForm',
})

const propsData = reactive({
  moduleId: '3' /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
  fieldKey: 'product' /* 模块关键词;client-终端 microservice微服务 product-产品 iterative-迭代 */,
  routeName: 'ProductSettings' /* 列表路由名 */,
})
</script>

<template>
  <FieldForm :props-data="propsData" />
</template>
