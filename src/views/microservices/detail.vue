<script lang="ts" setup>
import { SjzyTableV2, useSjzyTable } from '@sjzy/ui'
import { CopyDocument } from '@element-plus/icons-vue'
import type { ImicroserviceRow } from './type'
import { GetMicroserviceDetail } from '@/api/devops/weifuwuguanli'

defineOptions({
  name: 'MicroservicesDetail',
})
const route = useRoute()
const detailInfo = ref<ImicroserviceRow>()
const tableData = ref<any>()
const loading = ref(false)

const [tableRegister] = useSjzyTable({
  tableRowId: 'Row_id',
  showPager: false,
  showIndex: false,
  isCellSort: false,
  showAction: false,
  showHeader: false,
  border: 'inner',
  columns: [
    {
      field: 'enum_name',
      title: '微服务名称',
      minWidth: 300,
      slots: { default: 'enum_name' },
    },
    {
      field: 'link',
      title: '地址',
      minWidth: 300,
      slots: { default: 'link' },
    },
    {
      field: 'version',
      title: '版本',
      minWidth: 200,
      slots: { default: 'version' },
    },
  ],
})

/** 获取详情 */
async function getInfo() {
  loading.value = true
  const { data }: any = await GetMicroserviceDetail({
    microservice_id: String(route.params?.id),
  }).finally(() => {
    loading.value = false
  })
  detailInfo.value = data

  const extend = data.extends?.find((i: any) => i.field_name === 'microservice_env' && i.envData)
  tableData.value = extend.envData?.filter((i: any) => i.link)
}
/**
 * 复制文字
 * @param {string} text 复制文字
 */
async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    $baseMessage('复制成功', 'success')
  }
  catch (err) {}
}

onMountedOrActivated(() => {
  getInfo()
})
</script>

<template>
  <div v-loading="loading" class="microservices-detail">
    <div class="h-70px flex flex-col justify-center bg-[var(--sjzy-bg)] p-x-24px">
      <div class="m-b-8px">
        <span class="text-16px fw-bold">{{ detailInfo?.microservice_name }}</span>
        <ElTag v-if="detailInfo?.is_enable === 0" type="info" size="small" class="m-l-10px">
          已关闭
        </ElTag>
      </div>
      <div>
        <span>创建时间：{{ detailInfo?.create_at }}</span>
      </div>
    </div>

    <div class="h-[calc(100%-70px)] overflow-y-auto p-[var(--sjzy-container-padding)]">
      <div class="sjzy-box h-100% p-0!">
        <SjzyPart title="微服务环境" type="outline" header-border>
          <div class="p-x-12px p-b-12px">
            <SjzyTableV2 v-model="tableData" @register="tableRegister">
              <template #enum_name="{ row }">
                <div>
                  {{ `${row.enum_name}(${row.enum_code})` }}
                </div>
              </template>
              <!-- 地址 -->
              <template #link="{ row }">
                <div @mouseenter="row.show = true" @mouseleave="row.show = false">
                  <ElLink type="primary">
                    <a :href="row.link" target="_blank" rel="noopener noreferrer">{{ row.link }}</a>
                  </ElLink>
                  <ElButton
                    v-show="row.show"
                    type="primary"
                    text
                    @click="copyToClipboard(row.link)"
                  >
                    <ElIcon size="12">
                      <CopyDocument />
                    </ElIcon>
                  </ElButton>
                </div>
              </template>
              <!-- 版本 -->
              <template #version="{ row }">
                <div> 版本号：{{ row.version }} </div>
              </template>
            </SjzyTableV2>
          </div>
        </SjzyPart>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.microservices-detail {
  width: 100%;
  height: 100%;

  :deep() {
    .vxe-table--border-line {
      display: none;
    }
  }

  :deep() {
    .vxe-table--render-default.border--inner .vxe-body--column {
      background: none;
      border-bottom: 1px dashed var(--vxe-ui-table-border-color);
    }
  }
}
</style>
