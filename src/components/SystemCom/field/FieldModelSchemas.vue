<script lang="ts" setup>
import type { FormSchema, Recordable } from '@sjzy/ui'
import { SjzyDynamicPreview, SjzyForm, SjzyModal, useModal, useSjzyForm } from '@sjzy/ui'
import { Link } from '@element-plus/icons-vue'
import type { EnvData, FieldItem, TerminalUnit } from './type'
import { GetEnumGet } from '@/api/devops/tongyong'
import { GetTemplateDefaultTempDetail } from '@/api/devops/mobanguanli'

defineOptions({
  name: 'FieldModelSchemas',
})

const props = withDefaults(
  defineProps<{
    /** 弹窗标题 */
    title: string
    /** 字段关键字 */
    fieldKey: string
    /** 归属模块;1-终端 2微服务 3-产品 4-迭代 */
    moduleId: string
    /** 新增保存接口 */
    addApi: (...arg: any[]) => Promise<any>
    /** 编辑保存接口 */
    editApi: (...arg: any[]) => Promise<any>
    /** 详情接口 */
    infoApi: (...arg: any[]) => Promise<any>
  }>(),
  {},
)

const emit = defineEmits<{
  submit: []
  reload: []
}>()
const idkey = `${props.fieldKey!}_id`
const namekey = `${props.fieldKey!}_name`
const envkey = `${props.fieldKey!}_env`

const terminalType = ref<TerminalUnit[]>([])
const saveType = ref<'add' | 'edit'>('add')
const [modalRegister, { setModalProps, closeModal }] = useModal()
const mergeList = ref<FieldItem[]>([])
const loading = ref<boolean>(false)
const specParams = ref<Recordable>({})

/** 表单项 */
const schemasData = ref<FormSchema[]>([])

const [register, { validate, setFieldsValue, updateSchema, clearValidate }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
})

/** 表单数据 */
const formModelData = ref<Recordable>({
  version: '',
  [idkey]: '',
  [namekey]: '',
  [envkey]: [],
  envData: [],
})

/** 保存 */
async function handleSave() {
  const flag = await validate()
  const api: { [x: string]: Fn } = {
    add: props.addApi,
    edit: props.editApi,
  }
  const { version, envData } = formModelData.value
  mergeList.value.forEach((item: Recordable) => {
    const keys = Object.keys(formModelData.value)
    if (keys.includes(item.field_name)) {
      item.default_value = formModelData.value[item.field_name]
      if (item.field_name === envkey) {
        item.envData = envData
      }
    }
  })

  if (flag) {
    const params = {
      version,
      [idkey]: formModelData.value[idkey],
      [namekey]: formModelData.value[namekey],
    }

    if (props.moduleId === '3') {
      specParams.value = {
        client_ids:
          formModelData.value.product_client_list?.map((item: Recordable) => item.value) || [],
        microservice_ids:
          formModelData.value.product_microservice_list?.map((item: Recordable) => item.value)
          || [],
        extends: [...mergeList.value],
      }
    }
    else {
      specParams.value = {
        extends: [...mergeList.value],
      }
    }

    const data = await api[saveType.value]({
      ...params,
      ...specParams.value,
    })

    if (data.code === '200') {
      $baseMessage(
        formModelData.value[idkey] ? '编辑成功' || data.message : '新增成功' || data.message,
        'success',
      )
      closeModal()
      resetData()
      emit('reload')
    }
  }
}

/** 重置数据 */
function resetData() {
  schemasData.value = []
  clearValidate()
}

/** 取消 */
function handleCancel() {
  resetData()
}

/**
 * 环境配置勾选变化
 * @param formModel 表单数据
 */
function envChange(formModel: Recordable) {
  const { envData } = formModel
  envData.forEach((item: EnvData, i: number) => {
    if (formModel[envkey].includes(item?.enum_value)) {
      item.ifShow = true
      updateSchema({
        field: `envData[${i}].link`,
        ifShow: true,
      })
    }
    else {
      item.ifShow = false
      updateSchema({
        field: `envData[${i}].link`,
        ifShow: false,
      })
      envData[i].link = ''
      envData[i].version = ''
    }
  })
}

/**
 * 打开弹窗
 * @param type 创建/编辑 add-创建 edit-编辑
 * @param row 行数据
 */
function handleModel(type: 'add' | 'edit', row?: Recordable) {
  saveType.value = type
  setModalProps({
    title: type === 'add' ? `创建${props.title}` : `编辑${props.title}`,
    size: 'small',
    visible: true,
    cancelText: '取消',
    okText: '保存',
  })

  nextTick(async () => {
    // 获取默认模板详情
    if (type === 'add') {
      loading.value = true
      const { data } = await GetTemplateDefaultTempDetail({
        module_id: props.moduleId.toString(),
      }).finally(() => {
        loading.value = false
      })
      const { fieldList, template_content } = data as Recordable
      // 合并数据
      mergeList.value = fieldList?.map((item: FieldItem) => {
        const arr = template_content.filter(
          (item1: FieldItem) => item.field_name === item1.field_name,
        )
        return {
          ...item,
          ...arr[0],
        }
      })
    }
    else {
      loading.value = true
      const res: Recordable = await props
        .infoApi({
          [idkey]: row![idkey],
        })
        .finally(() => {
          loading.value = false
        })
      const { fieldList, version } = res.data
      // 合并数据
      mergeList.value = fieldList?.map((item: FieldItem) => {
        const arr = res.data.extends.filter(
          (item1: FieldItem) => item.field_name === item1.field_name,
        )
        return {
          ...item,
          ...arr[0],
        }
      })
      Object.assign(formModelData.value, {
        [idkey]: res.data[idkey],
        version,
      })
    }
    mergeList.value.forEach((mergeItem: FieldItem) => {
      const { default_value } = mergeItem
      if (mergeItem.field_name !== envkey) {
        schemasData.value.push({
          label: mergeItem.field_label,
          field: `${mergeItem.field_name}`,
          component: 'SjzyInput',
          componentProps: {
            style: {
              width: '100%',
            },
            ...mergeItem.field_component,
          },
          colProps: {
            span: 24,
          },
          required: mergeItem.is_required,
          slot: 'custom-slot',
        })
        setFieldsValue({ [`${mergeItem.field_name}`]: default_value })
      }
      else {
        // 终端环境设置
        const { envData } = formModelData.value
        const envDefaultData = mergeItem.envData
        schemasData.value.push({
          label: mergeItem.field_label,
          field: `${mergeItem.field_name}`,
          component: 'CheckboxGroup',
          componentProps: ({ formModel }: Recordable) => {
            return {
              options: terminalType.value?.map((item: TerminalUnit) => {
                return {
                  label: `${item.enum_name}(${item.enum_code})`,
                  value: item.enum_value,
                }
              }),
              onChange: () => envChange(formModel),
            }
          },
          colProps: {
            span: 24,
          },
          required: mergeItem.is_required,
        })
        setFieldsValue({ [`${mergeItem.field_name}`]: default_value })
        // 渲染环境
        terminalType.value?.forEach((terminalItem: TerminalUnit, i) => {
          envData[i] = {
            link: '',
            version: '',
            ifShow: default_value.includes(terminalItem.enum_value),
            ...terminalItem,
          }
          schemasData.value.push({
            label: `${envData[i].enum_name}(${envData[i].enum_code})`,
            field: `envData[${i}].link`,
            component: 'SjzyInput',
            componentProps: {
              placeholder: `请输入${envData[i].enum_name}(${envData[i].enum_code})`,
            },
            colProps: {
              span: 24,
            },
            slot: envData[i].enum_value,
            required: mergeItem.is_required,
            ifShow: envData[i].ifShow,
            dynamicRules: () => [
              {
                required: mergeItem.is_required,
                message: `请输入${envData[i].enum_name}(${envData[i].enum_code})`,
              },
              {
                validator: (_, __, callback) => {
                  if (envData[i].version === '' && mergeItem.is_required) {
                    callback(new Error(`请输入${envData[i].enum_name}(${envData[i].enum_code})`))
                  }
                  else {
                    callback()
                  }
                },
              },
            ],
          })
          // 赋默认值
          envDefaultData.forEach((defaultItem: Recordable) => {
            if (defaultItem.enum_value === terminalItem.enum_value) {
              envData[i].link = defaultItem.link
              envData[i].version = defaultItem.version
            }
          })
        })
      }
    })
  })
}

onMountedOrActivated(() => {
  /** 获取枚举值 */
  GetEnumGet({ code: 'env' }, {}).then((res: Recordable) => {
    terminalType.value = res.data
  })
})

defineExpose({
  handleModel,
})
</script>

<template>
  <SjzyModal @register="modalRegister" @ok="handleSave()" @cancel="handleCancel()">
    <SjzyForm
      v-loading="loading"
      class="min-h-200px"
      :model="formModelData"
      :schemas="schemasData"
      @register="register"
    >
      <template
        v-for="(item, i) in terminalType"
        #[item.enum_value]="{ model }"
        :key="item.enum_value"
      >
        <div v-if="model.envData[i]" class="flex">
          <ElInput v-model="model.envData[i].link" class="w-70% pr-2" placeholder="地址" clearable>
            <template #prefix>
              <ElIcon class="el-input__icon font-size-14px">
                <Link />
              </ElIcon>
            </template>
          </ElInput>
          <ElInput v-model="model.envData[i].version" class="w-30%" placeholder="版本" clearable>
            <template #prefix>
              <ElIcon class="el-input__icon font-size-14px">
                <span class="icon iconfont icon-banben font-size-12px!" />
              </ElIcon>
            </template>
          </ElInput>
        </div>
      </template>
      <template #custom-slot="{ model, field, schema }">
        <SjzyDynamicPreview
          v-if="schema.componentProps.componentType === 'Upload'"
          v-model:file-list="model[field]"
          v-bind="{
            autoUpload: false,
            ...schema.componentProps,
          }"
          :component-type="schema.componentProps.componentType"
          is-edit
        />
        <SjzyDynamicPreview
          v-else-if="schema.componentProps.componentType"
          v-model="model[field]"
          v-bind="schema.componentProps"
          :component-type="schema.componentProps.componentType"
          is-edit
        />
      </template>
    </SjzyForm>
  </SjzyModal>
</template>
