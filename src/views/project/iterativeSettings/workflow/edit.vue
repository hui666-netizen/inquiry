<script lang="ts" setup>
import IterativeSettingsWorkflowForm from './components/Form.vue'

defineOptions({
  name: 'IterativeSettingsWorkflowEdit',
})

const route = useRoute()
const { setTitle } = useTabs()

onMountedOrActivated(() => {
  setTitle(`编辑流程-${route.query?.name}`)
})
</script>

<template>
  <div class="IterativeSettingsWorkflowEdit-container">
    <IterativeSettingsWorkflowForm />
  </div>
</template>
