<script lang="ts" setup>
import IterativeSettingsWorkflowForm from './components/FlowForm.vue'

defineOptions({
  name: 'IterativeSettingsFlowEditForm',
})

const route = useRoute()
const { setTitle } = useTabs()
const id = route.params.id

onActivated(() => {
  setTitle('编辑工作流')
})
</script>

<template>
  <div class="IterativeSettingsFlowAddForm-container">
    <IterativeSettingsWorkflowForm :id="id" />
  </div>
</template>

<style lang="scss" scoped>
.IterativeSettingsFlowAddForm-container {
  width: 100%;
  height: 100%;
}
</style>
