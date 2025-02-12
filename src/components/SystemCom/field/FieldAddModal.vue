<script lang="ts" setup>
import type { ModalMethods } from '@sjzy/ui'
import { SjzyButton, SjzyModal, useModalInner } from '@sjzy/ui'
import type { CheckboxValueType } from 'element-plus'
import { ElCheckbox, ElCheckboxGroup, ElCol, ElRow } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { OptionItem } from './type'
import FieldModal from '@/components/SystemCom/field/FieldModal.vue'
import { GetFieldConfigGetListGroupByModuleId } from '@/api/devops/ziduanguanli'

const props = defineProps({
  moduleId: {
    type: String /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
    required: true,
  },
})

const emit = defineEmits<{ register: [reg: ModalMethods, uuid: string], success: [data: any[]] }>()
const [register, { closeModal, getVisible }] = useModalInner(async (opt) => {
  await reload()
  if (opt.data) {
    systemField.value.forEach((item) => {
      if (opt.data.includes(item.value)) {
        model.system.model.push(item.value)
      }
      // TODO 需要改成item.value
      if (opt.fixedData.includes(item.label)) {
        model.system.model.push(item.value)
      }
    })
    customField.value.forEach((item) => {
      item.is_required = true
      if (opt.data.includes(item.value)) {
        model.custom.model.push(item.value)
      }
    })
    handleSystemCheckChange(model.system.model)
    handleCustomCheckChange(model.custom.model)
  }
  fixedData.value = opt.fixedData
  model.system.model = fixedData.value
  model.system.checkAll = fixedData.value.length === systemField.value.length
})

/** 系统字段 */
const systemField = ref<OptionItem[]>([])
/** 自定义字段 */
const customField = ref<OptionItem[]>([])
/** 固定字段标识 */
const fixedData = ref<string[]>([])
const model = reactive<{
  [key: string]: {
    model: string[]
    checkAll: boolean
    isIndeterminate: boolean
  }
}>({
  system: {
    model: [],
    checkAll: false,
    isIndeterminate: false,
  },
  custom: {
    model: [],
    checkAll: false,
    isIndeterminate: false,
  },
})
/** 抽屉弹窗 */
const fieldModalRef = ref<InstanceType<typeof FieldModal>>()

/** 系统字段全选事件 */
function handleSystemCheckAllChange(val: CheckboxValueType) {
  model.system.isIndeterminate = false
  model.system.model = val ? systemField.value.map(i => i.value) : []
}

/** 系统字段选择事件 */
function handleSystemCheckChange(value: CheckboxValueType[]) {
  const checkedCount = value.length
  model.system.checkAll = checkedCount === systemField.value.length
  model.system.isIndeterminate = checkedCount > 0 && checkedCount < systemField.value.length
}

/** 自定义字段全选事件 */
function handleCustomCheckAllChange(val: CheckboxValueType) {
  model.custom.isIndeterminate = false
  model.custom.model = val ? customField.value.map(i => i.value) : []
}

/** 自定义字段选择事件 */
function handleCustomCheckChange(value: CheckboxValueType[]) {
  const checkedCount = value.length
  model.custom.checkAll = checkedCount === customField.value.length
  model.custom.isIndeterminate = checkedCount > 0 && checkedCount < customField.value.length
}

/** 添加自定义字段事件 */
function handleAddClick() {
  fieldModalRef.value?.handleOpen()
}

/** 保存事件 */
function handleSave() {
  // 可能是固定字段需要过滤掉
  // TODO 去除field_component字段
  const systemData = systemField.value.filter(
    item => model.system.model.includes(item.value) && !fixedData.value.includes(item.value),
  )
  const customData = customField.value.filter(item => model.custom.model.includes(item.value))
  emit('success', systemData.concat(customData))
  closeModal()
}

/** 获取数据源 */
async function getFieldConfigPageQuery() {
  const { data } = await GetFieldConfigGetListGroupByModuleId({
    module_id: props.moduleId,
    allow_setting: '1',
  })
  const apiData = data as Recordable
  systemField.value = apiData!.sys.map((item: { field_label: string, field_name: string }) => {
    return {
      ...item,
      label: item.field_label,
      value: item.field_name,
    }
  })
  customField.value = apiData!.customer.map((item: { field_label: string, field_name: string }) => {
    return {
      ...item,
      label: item.field_label,
      value: item.field_name,
    }
  })
}

/** 重新加载数据 */
async function reload() {
  await getFieldConfigPageQuery()
  handleSystemCheckChange(model.system.model)
  handleCustomCheckChange(model.custom.model)
}

watch(
  () => getVisible?.value,
  (val) => {
    if (!val) {
      model.system.model = []
      model.system.checkAll = false
      model.system.isIndeterminate = false
      model.custom.model = []
      model.custom.checkAll = false
      model.custom.isIndeterminate = false
    }
  },
)

onMounted(() => {
  reload()
})
</script>

<template>
  <div>
    <SjzyModal v-bind="$attrs" @register="register" @ok="handleSave">
      <div>
        <ElCheckbox
          v-model="model.system.checkAll"
          :indeterminate="model.system.isIndeterminate"
          :disabled="model.system.checkAll"
          @change="handleSystemCheckAllChange"
        >
          <span class="font-bold">系统字段({{ model.system.model.length }}/{{ systemField.length }})</span>
        </ElCheckbox>
        <ElCheckboxGroup v-model="model.system.model" @change="handleSystemCheckChange">
          <ElRow :gutter="20">
            <ElCol v-for="item in systemField" :key="item.label" :span="6">
              <ElCheckbox
                :label="item.label"
                :disabled="fixedData.includes(item.value)"
                :value="item.value"
              >
                <span class="inline-block max-w-120px text-truncate" :title="item.label">
                  {{ item.label }}
                </span>
              </ElCheckbox>
            </ElCol>
          </ElRow>
        </ElCheckboxGroup>
      </div>
      <div>
        <div class="flex items-center">
          <ElCheckbox
            v-model="model.custom.checkAll"
            :indeterminate="model.custom.isIndeterminate"
            @change="handleCustomCheckAllChange"
          >
            <span class="font-bold">自定义字段({{ model.custom.model.length }}/{{ customField.length }})</span>
          </ElCheckbox>
          <SjzyButton type="primary" link :icon="Plus" @click="handleAddClick">
            添加自定义字段
          </SjzyButton>
        </div>
        <ElCheckboxGroup v-model="model.custom.model" @change="handleCustomCheckChange">
          <ElRow :gutter="20">
            <ElCol v-for="item in customField" :key="item.label" :span="6">
              <ElCheckbox :label="item.label" :value="item.value">
                <span class="inline-block max-w-120px text-truncate" :title="item.label">
                  {{ item.label }}
                </span>
              </ElCheckbox>
            </ElCol>
          </ElRow>
        </ElCheckboxGroup>
      </div>
    </SjzyModal>
    <FieldModal ref="fieldModalRef" :module-id="moduleId" @success="reload()" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.sjzy-ui-modal .sjzy-modal-wrapper) {
  padding-top: 10px;
}
</style>
