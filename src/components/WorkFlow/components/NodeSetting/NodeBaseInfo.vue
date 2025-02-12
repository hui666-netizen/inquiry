<script lang="ts" setup>
import { SjzyForm, useSjzyForm } from '@sjzy/ui'
import type { IFlowRow } from '../../types'
import { isEndNode, isStartNode } from '../../hooks/useFlowModel'
import { GetEnumGet } from '@/api/devops/tongyong'

defineOptions({
  name: 'NodeBaseInfo',
})

/** 绑定的节点数据 */
const nodeData = defineModel<IFlowRow>({
  default: {},
})

/** 节点信息 */
const [registerBase, { validate: validateBase }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'setting_config.basic.node_name',
      label: '节点名称',
      component: 'SjzyInput',
      required: true,
      componentProps: () => {
        return {
          placeholder: '请输入',
          maxlength: 20,
          disabled:
            isStartNode(nodeData.value?.node?.row_id) || isEndNode(nodeData.value?.node?.row_id),
        }
      },
      colProps: {
        span: 24,
      },
      itemProps: {
        class: 'm-b-0!',
      },
      labelClass: 'font-bold color-#202122',
    },
    {
      field: 'setting_config.basic.need_fill_time',
      label: '节点需填写排期与实际工时',
      component: 'SjzyCheckbox',
      componentProps: {
        label: '节点需填写排期与实际工时',
      },
      colProps: {
        span: 24,
      },
      itemProps: {
        class: 'no-label m-b-0!',
      },
      defaultValue: false,
    },
  ],
})
/** 节点负责人 */
const [registerManger, { validate: validateManger }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'setting_config.node_manger.type',
      label: '分配方式',
      component: 'SjzySelect',
      componentProps: {
        placeholder: '请选择',
        options: {
          spareData: [
            { label: '自行添加、无范围限制', value: 'unrestricted' },
            { label: '与角色联动', value: 'role' },
          ],
          labelKey: ['label'],
          valueKey: 'value',
        },
      },
      colProps: {
        span: 24,
      },
      required: true,
      defaultValue: 'unrestricted',
      labelClass: 'font-bold color-#202122',
    },
    {
      field: 'setting_config.node_manger.roles',
      label: '选择范围',
      component: 'SjzySelect',
      componentProps: {
        placeholder: '请选择',
        multiple: true,
        immediate: true,
        options: {
          api: (params: any) => GetEnumGet({ ...params }, {}),
          labelKey: ['enum_name'],
          valueKey: 'enum_value',
        },
        extra: {
          code: 'system_role',
        },
      },
      colProps: {
        span: 24,
      },
      required: true,
      ifShow: ({ model }) => {
        return model?.setting_config?.node_manger?.type === 'role'
      },
    },
  ],
})
/** 高级配置 */
const [registerAdvanced, { validate: validateAdvanced }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'setting_config.advanced.is_allow_delete',
      label: '允许删除节点',
      component: 'SjzySwitch',
      componentProps: {
        label: '允许删除节点',
        labelClass: 'text-12px font-bold',
      },
      colProps: {
        span: 24,
      },
      itemProps: {
        class: 'no-label m-b-0!',
      },
      defaultValue: false,
    },
    {
      field: 'setting_config.advanced.roles',
      label: '删除操作授权角色',
      component: 'SjzySelect',
      componentProps: {
        placeholder: '请选择',
        multiple: true,
        immediate: true,
        options: {
          api: (params: any) => GetEnumGet({ ...params }, {}),
          labelKey: ['enum_name'],
          valueKey: 'enum_value',
        },
        extra: {
          code: 'system_role',
        },
      },
      colProps: {
        span: 24,
      },
      required: true,
      ifShow: ({ model }) => {
        return !!model?.setting_config?.advanced?.is_allow_delete
      },
    },
  ],
})

/** 表单校验 */
function handleValidate(): Promise<boolean> {
  return new Promise((resolve, _reject) => {
    Promise.all([validateBase(), validateManger(), validateAdvanced()])
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(!nodeData.value?.node?.row_id)
      })
  })
}

defineExpose({
  handleValidate,
})
</script>

<template>
  <div class="p-x-20px">
    <SjzyForm class="m-t-15px" :model="nodeData" @register="registerBase" />
    <div class="m-y-15px h-1px w-100% bg-[#EBEFF2]" />
    <SjzyForm :model="nodeData" @register="registerManger" />
    <div class="m-y-15px h-1px w-100% bg-[#EBEFF2]" />
    <SjzyForm :model="nodeData" @register="registerAdvanced" />
  </div>
</template>
