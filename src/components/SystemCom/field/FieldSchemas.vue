<script lang="ts" setup>
import type { FormSchema } from '@sjzy/ui'
import { SjzyDynamicPreview, SjzyModalForm, useModal } from '@sjzy/ui'
import { GetTemplateDefaultTempDetail } from '@/api/devops/mobanguanli'

defineOptions({
  name: 'FieldSchemas',
})

const props = withDefaults(
  defineProps<{
    /** 弹窗标题 */
    title: string
    /** 新增保存接口 */
    addApi: (...arg: any[]) => Promise<any>
    /** 编辑保存接口 */
    editApi: (...arg: any[]) => Promise<any>
    /** 详情接口 */
    infoApi: (...arg: any[]) => Promise<any>
    /** 查询接口额外参数 */
    apiParams?: Record<string, any>
    /** 详情接口的id */
    infoApiIdKey: string
  }>(),
  {},
)
const emit = defineEmits<{
  submit: []
}>()

const sjzyModalFormRef = ref<InstanceType<typeof SjzyModalForm>>()
/** 表单的配置 */
const schemas = ref<FormSchema[]>()
/** 新增编辑弹窗 */
const [register, { openModal, setModalProps }] = useModal()

/** 获取字段详情 */
async function getSchema(module_id: string) {
  const { data }: any = await GetTemplateDefaultTempDetail({ module_id })
  if (data) {
    const { fieldList, template_content } = data
    schemas.value = fieldList?.map((i: any) => {
      const obj = template_content?.find((j: any) => j.field_name === i.field_name)
      return {
        field: i.field_name,
        label: i.field_label,
        component: 'Input',
        componentProps: {
          style: {
            width: '100%',
          },
          ...i?.field_component,
        },
        required: !!obj?.is_required,
        defaultValue: obj?.default_value,
        slot: `${i.field_name}`,
      }
    })
  }
}

/** 点击新增 编辑打开弹窗 */
async function handleOpen({
  type,
  module_id,
  params,
}: {
  type: 'add' | 'edit'
  module_id: string
  params?: any
}) {
  setModalProps({
    title: type === 'add' ? `创建${props.title}` : `编辑${props.title}`,
  })

  // 获取动态表单
  await getSchema(module_id)

  openModal(true, {
    [props.infoApiIdKey]: params[props.infoApiIdKey],
    schemas: schemas.value,
  })
}

function handleSubmit() {
  emit('submit')
}
function getinfo(val: any) {
  const obj: any = {}
  val?.extends?.forEach((ele: any) => {
    obj[ele.field_name] = ele.default_value
  })
  // console.log(obj, '=====================')
  sjzyModalFormRef.value?.setFieldsValue(obj)
}

defineExpose({
  handleOpen,
})
</script>

<template>
  <!-- 新增编辑弹窗 -->
  <SjzyModalForm
    ref="sjzyModalFormRef"
    :form-props="{
      labelPosition: 'top',
      labelWidth: 90,
    }"
    size="mini"
    :edit-api="addApi"
    :add-api="editApi"
    :info-api="infoApi"
    :api-params="apiParams"
    :info-api-id-key="infoApiIdKey"
    @register="register"
    @on-submit="handleSubmit"
    @on-getinfo="getinfo"
  >
    <!-- 终端环境配置 -->
    <template #form-client_env="{ model }">
      {{ model.client_env }}
    </template>

    <template
      v-for="item in schemas?.map((i) => i.field)?.filter((j) => !['client_env'].includes(j))"
      #[`form-${item}`]="{ model, schema }"
      :key="item"
    >
      <SjzyDynamicPreview
        v-if="schema.componentProps.componentType === 'Upload'"
        v-model:file-list="model[schema.field]"
        v-bind="{
          autoUpload: false,
          ...schema.componentProps,
        }"
        :component-type="schema.componentProps.componentType"
        is-edit
      />
      <SjzyDynamicPreview
        v-else-if="schema.componentProps.componentType"
        v-model="model[schema.field]"
        v-bind="schema.componentProps"
        :component-type="schema.componentProps.componentType"
        is-edit
      />
    </template>
  </SjzyModalForm>
</template>
