<script lang="ts" setup>
defineOptions({
  name: 'MicroServiceSettingsEditForm',
})

const propsData = reactive({
  moduleId: '2' /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
  fieldKey:
    'microservice' /* 模块关键词;client-终端 microservice微服务 product-产品 iterative-迭代 */,
  routeName: 'MicroServiceSettings' /* 列表路由名 */,
})
</script>

<template>
  <FieldForm :props-data="propsData" />
</template>
