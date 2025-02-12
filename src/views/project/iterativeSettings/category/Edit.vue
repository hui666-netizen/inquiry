<script lang="ts" setup>
import { type FormSchema, SjzyModalForm, useModal } from '@sjzy/ui'
// ../../../../../../../F1/packages/library
import type { IterationCategory } from '../../type'
import {
  GetProjectIterationCategoryDetail,
  PostProjectIterationCategoryCreate,
  PostProjectIterationCategoryUpdate,
} from '@/api/devops/diedaileibie'
import { GetTemplatePageQuery } from '@/api/devops/mobanguanli'

defineOptions({
  name: 'CategoryManagementEdit',
})

const emit = defineEmits<{
  'on-submit': []
}>()

/** 新增编辑弹窗 */
const [register, { openModal, setModalProps }] = useModal()
const modalSchemas = reactive<FormSchema[]>([
  {
    label: '类别名称',
    field: 'category_name',
    component: 'SjzyInput',
    componentProps: {
      placeholder: '请输入类别名称',
      maxlength: 20,
    },
    colProps: {
      span: 12,
    },
    required: true,
  },
  {
    label: '图标设置',
    field: 'icon',
    component: 'SjzyInput',
    colProps: {
      span: 12,
    },
    slot: 'icon',
    defaultValue: 'blue',
    required: true,
  },
  {
    label: '效果预览',
    field: 'preview',
    component: 'SjzyInput',
    className: 'no-label',
    colProps: {
      span: 24,
    },
    slot: 'preview',
  },
  {
    label: '创建页',
    field: 'template_id',
    component: 'SjzySelect',
    componentProps: ({ formModel }) => {
      return {
        defaultOption: {
          value: formModel.template_id,
          label: formModel.template_text,
        },
        options: {
          api: GetTemplatePageQuery,
          labelKey: ['template_name'],
          valueKey: 'id',
        },
        extra: {
          module_id: 1,
        },
      }
    },
    colProps: {
      span: 24,
    },
    required: true,
  },
  {
    label: '工作流',
    field: 'workflow_id',
    component: 'SjzySelect',
    componentProps: ({ formModel }) => {
      return {
        defaultOption: {
          value: formModel.workflow_id,
          label: formModel.workflow_text,
        },
        options: {
          api: GetTemplatePageQuery,
          labelKey: ['template_name'],
          valueKey: 'id',
        },
        extra: {
          module_id: 1,
        },
      }
    },
    colProps: {
      span: 12,
    },
    required: true,
  },
  {
    label: '工作流程',
    field: 'workflow_path_id',
    component: 'SjzySelect',
    componentProps: ({ formModel }) => {
      return {
        defaultOption: {
          value: formModel.workflow_path_id,
          label: formModel.workflow_path_text,
        },
        options: {
          api: GetTemplatePageQuery,
          labelKey: ['template_name'],
          valueKey: 'id',
        },
        extra: {
          module_id: 1,
        },
      }
    },
    colProps: {
      span: 12,
    },
    required: true,
  },
])

/** 点击新增 编辑打开弹窗 */
function handleOpen(type: 'add' | 'edit', row?: IterationCategory) {
  setModalProps({
    title: type === 'add' ? '创建分类' : '编辑分类',
  })

  openModal(true, {
    category_id: row?.iteration_category_id,
    schemas: modalSchemas,
  })
}

/** 提交保存 */
function handleSubmit() {
  emit('on-submit')
}

defineExpose({
  handleOpen,
})
</script>

<template>
  <SjzyModalForm
    width="588"
    :form-props="{
      labelPosition: 'top',
      labelWidth: 90,
    }"
    size="mini"
    :edit-api="PostProjectIterationCategoryUpdate"
    :add-api="PostProjectIterationCategoryCreate"
    :info-api="GetProjectIterationCategoryDetail"
    :api-params="{
      project_id: 1,
    }"
    info-api-id-key="category_id"
    class="categoryManagementEdit"
    @register="register"
    @on-submit="handleSubmit"
  >
    <!-- 图标设置 -->
    <template #form-icon="{ form }">
      <div class="flex items-center">
        <SjzyColor v-model="form.icon" class="m-r-8px" />
        <ElInput
          v-model.trim="form.category_en_name"
          maxlength="20"
          placeholder="请输入英文名"
          type="text"
        />
      </div>
    </template>
    <!-- 效果预览 -->
    <template #form-preview="{ form }">
      <div class="bg-[var(--sjzy-body-bg)] p-12px">
        <div class="m-b-5px">
          效果预览
        </div>
        <div class="flex items-center justify-center bg-[var(--sjzy-bg)] p-y-10px">
          <SjzyCategory
            :color="form.icon"
            :en-name="form.category_en_name"
            :name="form.category_name"
          />
        </div>
      </div>
    </template>
  </SjzyModalForm>
</template>
