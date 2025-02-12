<script lang="ts" setup>
import { SjzyButton } from '@sjzy/ui'
import type { IterationCategory } from '../../type'
import CategoryManagementEdit from './Edit.vue'
import {
  GetProjectIterationCategoryListQuery,
  PostProjectIterationCategoryDelete,
  PostProjectIterationCategoryDisable,
  PostProjectIterationCategoryEnable,
} from '@/api/devops/diedaileibie'

defineOptions({
  name: 'CategoryManagement',
})

const categoryManagementEditRef = ref<InstanceType<typeof CategoryManagementEdit>>()
const loading = ref(false)
/** 列表数据 */
const dataList = ref<IterationCategory[]>([])
/** 切换状态 */
function handleSwitch(row: IterationCategory) {
  const isOpenNum = dataList.value?.filter(i => i.is_enable === 1)?.length
  if (isOpenNum < 1 && !row.is_enable) {
    $baseMessage('至少保留一条开启分类!', 'error')
    row.is_enable = 1
    return
  }

  const api = row.is_enable
    ? PostProjectIterationCategoryEnable
    : PostProjectIterationCategoryDisable
  const msg = row.is_enable ? '启用' : '禁用'

  $baseConfirm({
    content: `是否确认${msg}此分类？`,
    title: '提示',
    type: 'warning',
    onOk: async () => {
      row.loading = true
      await api({ category_ids: [String(row.iteration_category_id)] })
        .then(({ code }) => {
          console.log(code)
          $baseMessage(`${msg}成功`, 'success')
        })
        .catch(() => {
          row.is_enable = row.is_enable ? 0 : 1
        })
        .finally(() => {
          row.loading = false
        })
    },
    onCancel: () => {
      row.is_enable = row.is_enable ? 0 : 1
    },
  })
}
/** 新增 */
function handleAdd() {
  if (dataList.value?.length >= 10) {
    $baseMessage('仅限添加10个类别!', 'error')
    return
  }
  categoryManagementEditRef.value?.handleOpen('add')
}
/** 编辑 */
function handleEdit(row: IterationCategory) {
  categoryManagementEditRef.value?.handleOpen('edit', row)
}
/** 删除 */
function handleDel(row: IterationCategory) {
  console.log(row)
  if (dataList.value?.length <= 1) {
    $baseMessage('至少保留一条数据!', 'error')
    return
  }

  $baseConfirm({
    content: '是否确认删除此分类？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostProjectIterationCategoryDelete({
        category_ids: [String(row.iteration_category_id)],
      }).then(async () => {
        $baseMessage('删除成功', 'success')
        handleInit()
      })
    },
  })
}

/** 获取列表数据 */
async function handleInit() {
  loading.value = true
  const res: Recordable = await GetProjectIterationCategoryListQuery({
    project_id: 1,
  }).finally(() => {
    loading.value = false
  })
  if (res.data) {
    dataList.value = res.data
  }
}

handleInit()
</script>

<template>
  <div class="categoryManagement-wrap p-12px">
    <div>
      <SjzyButton type="primary" @click="handleAdd()">
        新增
      </SjzyButton>
    </div>

    <div v-loading="loading" class="categoryManagement-list">
      <div v-for="item in dataList" :key="item.iteration_category_id" class="cate-item">
        <div class="cate-item-head m-b-5px flex items-center justify-between">
          <SjzyCategory
            :color="item.icon"
            :en-name="item.category_en_name"
            :name="item.category_name"
          />
          <div class="flex items-center">
            <ElDropdown trigger="hover">
              <span><SjzyIcon icon-font="icon-shenglve" :size="16" /></span>
              <template #dropdown>
                <ElDropdownMenu>
                  <ElDropdownItem>
                    <div class="p-x-15px" @click="handleEdit(item)">
                      编辑
                    </div>
                  </ElDropdownItem>
                  <ElDropdownItem>
                    <div class="p-x-15px" @click="handleDel(item)">
                      删除
                    </div>
                  </ElDropdownItem>
                </ElDropdownMenu>
              </template>
            </ElDropdown>

            <ElSwitch
              v-model="item.is_enable"
              :loading="item.loading"
              class="m-l-12px"
              :active-value="1"
              :inactive-value="0"
              @change="handleSwitch(item)"
            />
          </div>
        </div>
        <div class="cate-item-body flex items-center">
          <span>创建页： 迭代专用模板</span>
          <span class="line" />
          <span class="m-r-15px">工作流： 系统默认模板</span>
          <span>工作流程： 系统默认模板</span>
        </div>
      </div>
    </div>

    <CategoryManagementEdit ref="categoryManagementEditRef" @on-submit="handleInit" />
  </div>
</template>

<style lang="scss" scoped>
.categoryManagement-wrap {
  width: 100%;
  height: 100%;

  .categoryManagement-list {
    max-height: calc(100vh - 180px);
    margin-top: 12px;
    overflow-y: auto;

    .cate-item {
      padding: 12px 15px;
      margin-bottom: 12px;
      border: 1px solid rgba(0, 44, 93, 0.08);

      .cate-item-body {
        .line {
          display: inline-block;
          width: 1px;
          height: 16px;
          margin: 0 15px;
          background: #e0e0e0;
        }
      }
    }
  }
}
</style>
