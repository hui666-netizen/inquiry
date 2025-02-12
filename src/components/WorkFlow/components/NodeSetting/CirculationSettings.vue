<script lang="ts" setup>
import { SjzyButton, SjzyForm, useSjzyForm } from '@sjzy/ui'
import type { IFlowRow } from '../../types'

defineOptions({
  name: 'CirculationSettings',
})

/** 绑定的节点数据 */
const nodeData = defineModel<IFlowRow>({
  default: {},
})
/** 高级配置 */
const [registerApprove] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'setting_config.advanced.is_allow_delete',
      label: '审批开关',
      component: 'SjzySwitch',
      componentProps: {
        label: '审批开关',
        labelClass: 'font-bold text-12px',
      },
      colProps: {
        span: 24,
      },
      itemProps: {
        class: 'no-label m-b-0!',
      },
    },
    {
      field: 'setting_config.advanced.roles',
      label: '审批人',
      component: 'SjzySelect',
      componentProps: {
        placeholder: '请选择',
        multiple: true,
        options: {
          spareData: [],
          labelKey: ['label'],
          valueKey: 'value',
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
</script>

<template>
  <div class="circulation-settings-wrap p-x-20px">
    <div class="m-t-15px">
      <div class="m-b-10px font-bold">
        任务
      </div>
      <div v-for="item in 4" :key="item" class="sjzy-part-box m-b-5px p-x-10px p-y-4px">
        <div class="flex justify-between">
          <span>这是一个任务名称</span>
          <span class="action">
            <span class="m-l-10px cursor-pointer hover:color-[var(--el-color-primary)]"><SjzyIcon icon-font="icon-bianji3" :size="14" /></span>
            <span class="m-l-10px cursor-pointer hover:color-[var(--el-color-primary)]"><SjzyIcon icon-font="icon-qingkong" :size="14" /></span>
          </span>
        </div>
        <div class="m-t-4px">
          <ElTag class="b-0" link type="primary" size="small">
            会议
          </ElTag>
          <ElTag class="b-0" link type="primary" size="small">
            会议
          </ElTag>
        </div>
      </div>
      <SjzyButton class="w-full" type="primary" plain size="small">
        <SjzyIcon class="m-r-5px" icon-font="icon-tianjia" :size="14" />
        新增任务
      </SjzyButton>
    </div>
    <div class="m-y-15px h-1px w-100% bg-[#EBEFF2]" />
    <div>
      <div class="m-t-15px flex items-center">
        <div class="m-b-10px font-bold">
          校验条件
        </div>
        <ElTooltip effect="dark" content="校验条件：xxxxx" placement="top">
          <div class="m-l-5px p-b-10px">
            <SjzyIcon icon-font="icon-jinggao" :size="14" />
          </div>
        </ElTooltip>
      </div>
      <div v-for="item in 4" :key="item" class="sjzy-part-box m-b-5px p-x-10px p-y-4px">
        <div class="flex justify-between">
          <span>测试计划进度不为空等10条配置</span>
          <span class="action">
            <span class="m-l-10px cursor-pointer hover:color-[var(--el-color-primary)]"><SjzyIcon icon-font="icon-bianji3" :size="14" /></span>
            <span class="m-l-10px cursor-pointer hover:color-[var(--el-color-primary)]"><SjzyIcon icon-font="icon-qingkong" :size="14" /></span>
          </span>
        </div>
      </div>
      <SjzyButton class="w-full" type="primary" plain size="small">
        <SjzyIcon class="m-r-5px" icon-font="icon-tianjia" :size="14" />
        新增校验配置
      </SjzyButton>
    </div>

    <div class="m-y-15px h-1px w-100% bg-[#EBEFF2]" />
    <SjzyForm :model="nodeData" @register="registerApprove" />
  </div>
</template>

<style lang="scss" scoped>
.circulation-settings-wrap {
  width: 100%;
  height: 100%;

  // overflow-y: auto;
}
</style>
