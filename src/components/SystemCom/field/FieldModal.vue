<script lang="ts" setup>
import {
  SjzyDrawer,
  SjzyDynamicDesign,
  type SjzyDynamicFormType,
  SjzyDynamicPreview,
  SjzyDynamicTypeOptions,
  useDrawer,
  useSjzyForm,
} from '@sjzy/ui'
// ../../../../../F1/packages/library
import { isArray, isString } from '@sjzy/utils'
import {
  GetFieldConfigDetail,
  PostFieldConfigCreate,
  PostFieldConfigUpdate,
} from '@/api/devops/ziduanguanli'

defineOptions({
  name: 'FieldModal',
})

const props = withDefaults(
  defineProps<{
    /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */
    moduleId: string
  }>(),
  {},
)

const emit = defineEmits<{
  /** 成功回调 */
  success: []
}>()

const dynamicDesignRef = ref<InstanceType<typeof SjzyDynamicDesign>>()
/** 表单数据 */
const formModel = reactive<{
  /** 组件配置 */
  field_component?: any
  /** 组件绑定值 */
  componentValue?: any
  /** ID 编号 */
  field_id: string
  /** 字段名称 */
  field_label: string
  field_name?: string
  /** 备注 */
  remark?: string
  /** 排序 */
  field_sort?: string
  /** 字段类型;1-系统 2-自定义 */
  field_type?: string
  componentType?: SjzyDynamicFormType
}>({
  field_id: '',
  field_label: '',
  field_component: {
    options: [],
  },
  componentValue: undefined,
})
const loading = ref<boolean>(false)

/** 弹窗 */
const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawer()
/** 表单 */
const [registerForm, { validate }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      label: '字段名称',
      field: 'field_label',
      component: 'SjzyInput',
      componentProps: ({ formModel }) => {
        return {
          placeholder: '请输入字段标题',
          disabled: !!formModel.field_id && formModel.field_type === 1,
        }
      },
      colProps: {
        span: 12,
      },
      required: true,
    },
    {
      label: 'ID标识',
      field: 'field_name',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '自动生成',
        disabled: true,
      },
      colProps: {
        span: 12,
      },
    },
    {
      label: '字段类型',
      field: 'componentType',
      component: 'SjzySelect',
      componentProps: ({ formModel }) => {
        return {
          options: {
            spareData: SjzyDynamicTypeOptions,
            labelKey: ['label'],
            valueKey: 'value',
          },
          disabled: !!formModel.field_id,
          onSelectChange: () => {
            formModel.componentValue = undefined
          },
        }
      },
      colProps: {
        span: 12,
      },
      required: true,
    },
    {
      label: '字段来源',
      field: 'field_type',
      component: 'SjzySelect',
      componentProps: () => {
        return {
          options: {
            spareData: [
              { value: 1, label: '系统' },
              { value: 2, label: '自定义' },
            ],
            labelKey: ['label'],
            valueKey: 'value',
          },
          disabled: true,
        }
      },
      colProps: {
        span: 12,
      },
      required: true,
      defaultValue: 2,
    },
    {
      label: '备注',
      field: 'remark',
      component: 'SjzyTextarea',
      componentProps: {
        type: 'textarea',
        maxlength: 3000,
        rows: 6,
        placeholder: t('请输入备注'),
      },
      colProps: {
        span: 24,
      },
    },
  ],
})

/** 打开字段配置 */
function handleOpen(field_id?: string) {
  formModel.field_id = field_id || ''
  if (field_id) {
    handleGetFieldConfigDetail()
  }

  setDrawerProps({
    title: '字段设置',
    size: '40%',
    visible: true,
  })
}
/** 保存 */
async function handleSave() {
  const flag1 = await validate()
  const flag2 = await dynamicDesignRef.value?.validate()
  let bool = false
  if (isArray(flag2)) {
    bool = dynamicDesignRef.value ? flag2.includes(false) : false
  }
  else {
    bool = dynamicDesignRef.value ? !flag2 && flag2 !== undefined : false
  }
  if (!flag1 || bool)
    return

  const api = formModel.field_id ? PostFieldConfigUpdate : PostFieldConfigCreate

  setDrawerProps({ confirmLoading: true })

  const { code } = await api({
    ...formModel,
    field_component: {
      ...formModel.field_component,
      componentType: formModel.componentType,
    },
    module_id: props.moduleId,
  } as any).finally(() => {
    setDrawerProps({ confirmLoading: false })
  })

  if (+code === 200) {
    $baseMessage('保存成功')
    closeDrawer()
    emit('success')
  }
}
/** 获取详情 */
async function handleGetFieldConfigDetail() {
  loading.value = true
  const { data }: any = await GetFieldConfigDetail({ field_id: formModel.field_id }).finally(() => {
    loading.value = false
  })
  if (data) {
    nextTick(() => {
      const field_component = isString(data.field_component)
        ? JSON.parse(data.field_component)
        : data.field_component

      formModel.componentType = field_component.componentType
      formModel.field_id = data.field_id
      formModel.field_name = data.field_name
      formModel.field_label = data.field_label
      formModel.field_sort = data.field_sort
      formModel.field_type = data.field_type
      formModel.remark = data.remark
      Object.assign(formModel.field_component, field_component)
    })
  }
}

watch(
  () => formModel.field_component,
  () => {
    formModel.componentValue = undefined
  },
  {
    deep: true,
  },
)

defineExpose({
  handleOpen,
})
</script>

<template>
  <SjzyDrawer
    style="--sjzy-drawer-content-padding: 0"
    @register="registerDrawer"
    @ok="handleSave()"
  >
    <div class="h-100% w-100% flex flex-col overflow-hidden">
      <div class="w-[calc(100%-10px)] flex-1 overflow-y-auto p-x-24px p-y-24px">
        <SjzyForm
          v-loading="loading"
          class="overflow-hidden"
          :model="formModel"
          @register="registerForm"
        />

        <div
          v-if="
            !['Editor', 'Upload', 'Link'].includes(formModel.componentType || '')
              && formModel.componentType
          "
          class="min-h-200px overflow-hidden"
        >
          <div class="text-14px font-bold">
            字段配置
          </div>
          <div>
            <SjzyDynamicDesign
              v-if="formModel.componentType"
              ref="dynamicDesignRef"
              :key="formModel.componentType"
              v-model="formModel.field_component"
              :component-type="formModel.componentType"
            />
          </div>
        </div>
      </div>

      <div v-if="formModel.componentType" class="w-100%">
        <div
          class="bg-[var(--sjzy-body-bg)] p-x-[var(--sjzy-drawer-content-padding)] p-x-24px p-y-12px"
        >
          <div class="m-b-5px text-14px font-bold">
            样式预览
          </div>
          <div class="bg-[var(--sjzy-color-white)] p-10px">
            <div class="m-b-10px">
              {{ formModel.field_label }}
            </div>
            <SjzyDynamicPreview
              v-if="formModel.componentType"
              v-model="formModel.componentValue"
              v-bind="formModel.field_component"
              :component-type="formModel.componentType"
              is-edit
            />
          </div>
        </div>
      </div>
    </div>
  </SjzyDrawer>
</template>
