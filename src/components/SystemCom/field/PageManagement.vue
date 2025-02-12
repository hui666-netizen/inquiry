<script lang="ts" setup>
import { Plus, WarningFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

import {
  GetTemplatePageQuery,
  PostTemplateCopy,
  PostTemplateDelete,
  PostTemplateEnable,
} from '@/api/devops/mobanguanli'

defineOptions({
  name: 'PageManagement',
})

const props = defineProps({
  propsData: {
    type: Object as () => PropsData,
    required: true,
  },
})

type PropsData = {
  showSwitch: boolean /* 是否显示switch */
  moduleId: string /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */
  addRouteName: string /* 新增表单路由名 */
  editRouteName: string /* 编辑表单路由名 */
}

const router = useRouter()
const total = ref<Recordable>()
const listData = ref<Recordable>([])
const isShowTooltip = ref(true)
const refName = ref<HTMLElement[]>([])
const btnData = [
  { label: '编辑', value: 'edit', c_name: 'icon-bianji3' },
  { label: '复制', value: 'copy', c_name: 'icon-fuzhi1' },
  { label: '删除', value: 'delete', c_name: 'icon-qingkong' },
]

/**
 * 点击按钮
 * @param {string} value 按钮值 edit-编辑 copy-复制 delete-删除
 * @param  row 行数据
 */
function handleClick(value: string, row: Recordable) {
  switch (value) {
    case 'edit':
      onForm(2, props.propsData?.moduleId, row?.id)
      break
    case 'copy':
      onCopy(row)
      break
    case 'delete':
      onDelete(row)
      break
  }
}

/**
 * 新增/修改按钮
 * @param type 1 新增 2 修改
 * @param id row的id
 */
function onForm(type: 1 | 2, moduleId: string, id?: number) {
  if (type === 1) {
    router.push({ name: props.propsData.addRouteName, query: { id, type } })
  }
  else {
    router.push({ name: props.propsData.editRouteName, query: { id, type } })
  }
}

/**
 * 复制按钮
 * @param row 行数据
 */
function onCopy(row: Recordable) {
  PostTemplateCopy({ id: row?.id }).then(async () => {
    $baseMessage('复制成功', 'success')
    getData()
  })
}

/**
 * 删除按钮
 * @param row 行数据
 */
function onDelete(row: Recordable) {
  $baseConfirm({
    content: '删除后，不可恢复、请谨慎操作！',
    title: '是否确认删除此模板？',
    type: 'error',
    icon: WarningFilled,
    onOk: () => {
      PostTemplateDelete({ id: row?.id }).then(async () => {
        $baseMessage('删除成功', 'success')
        getData()
      })
    },
  })
}

/**
 * 启用按钮
 * @param row 行数据
 */
function onSwitch(row: Recordable) {
  $baseConfirm({
    content: '是否确认启用此模版？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostTemplateEnable({ id: row?.id }).then(async () => {
        $baseMessage('启用成功', 'success')
        getData()
      })
    },
    onCancel: () => {
      getData()
    },
  })
}

/**
 * 处理列表数据
 */
function getData() {
  GetTemplatePageQuery(
    { page: '1', list_rows: '50', module_id: props.propsData?.moduleId },
    {},
  ).then((res) => {
    listData.value = res.data.data
    total.value = res.data
    listData.value.forEach((item: Recordable) => {
      item.show = false
    })
  })
}

/**
 * 鼠标移入判断是否开启tooltip功能
 * @param {number} i 下标
 */
function onMouseOver(i: number) {
  const parentHeight = (unref(refName)[i]?.parentNode as any)?.offsetHeight
  const contentHeight = unref(refName)[i]?.offsetHeight
  if (contentHeight >= parentHeight) {
    isShowTooltip.value = false
  }
  else {
    isShowTooltip.value = true
  }
}

onMountedOrActivated(() => {
  getData()
})
</script>

<template>
  <div class="h-[calc(100vh-108px)] w-full overflow-auto p-12px">
    <div class="p-b-5px p-t-10px c-#3D3D3D">
      共{{ total?.total }}个模块
    </div>
    <div class="flex flex-wrap gap-2">
      <div class="creat-card" @click="onForm(1, props.propsData?.moduleId)">
        <ElIcon size="20" color="#4D4E4E">
          <Plus />
        </ElIcon>
        <div class="mt-2.5">
          新增模版
        </div>
      </div>
      <div
        v-for="(item, i) in listData"
        :key="item.id"
        class="show-cards"
        @mouseenter="item.show = true"
        @mouseleave="item.show = false"
      >
        <div class="w-full flex flex-1 items-center px-6" :class="item.show ? 'py-3' : 'py-7'">
          <div class="w-6 bg-#dcedff text-center">
            <span class="icon iconfont icon-tongyong c-$el-color-primary" />
          </div>
          <div
            class="ellipsis ml-2 mr-3 w-65%"
            :class="props.propsData?.showSwitch ? 'w-65%' : 'w-80%'"
            @mouseover="onMouseOver(+i)"
          >
            <ElTooltip :disabled="isShowTooltip" :content="item.template_name" placement="top">
              <div class="line-clamp-2 break-all text-14px font-bold">
                <span ref="refName">{{ item.template_name }}</span>
              </div>
            </ElTooltip>
          </div>
          <ElSwitch
            v-if="props.propsData?.showSwitch"
            v-model="item.is_default"
            :active-value="1"
            :inactive-value="0"
            :disabled="item.is_default === 1"
            @change="onSwitch(item)"
          />
        </div>
        <div v-show="item.show" class="bottom-btns">
          <div v-for="o in btnData" :key="o.value" class="bottom-btn py-2">
            <div :class="o.value !== 'delete' ? 'right-border' : ''">
              <ElLink
                :underline="false"
                :disabled="o.value === 'delete' && item.is_default === 1"
                @click="handleClick(o.value, item)"
              >
                <ElIcon size="12">
                  <span class="icon iconfont mr-2 text-14px!" :class="o.c_name" />
                </ElIcon>
                {{ o.label }}
              </ElLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creat-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 284px;
  height: 104px;
  padding: 0;
  cursor: pointer;
  border: 1px dashed #d2d9dd;
  border-radius: 2px;

  &:active {
    border-color: var(--el-color-primary);
  }
}

.show-cards {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 284px;
  height: 104px;
  padding: 0;
  border: 1px solid rgba(0, 44, 93, 0.08);
  border-radius: 2px;

  &:hover {
    border-color: var(--el-color-primary);
  }
}

.bottom-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .bottom-btn {
    width: calc(100% / 3);
    text-align: center;
    border-top: 1px solid rgba(0, 44, 93, 0.08);
  }
}

.right-border {
  border-right: 1px solid rgba(0, 44, 93, 0.08);
}
</style>
