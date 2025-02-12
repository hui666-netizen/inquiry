<script lang="ts" setup>
import { SjzyPart } from '@sjzy/ui'
import type { Client_info, IProductDetail } from './type'
import type { SjzyPartTableColumn } from '@/components/SjzyPartTable/type'
import { GetProductDetail } from '@/api/devops/chanpinguanli'

defineOptions({
  name: 'ProductDetail',
})

const route = useRoute()
const detailInfo = ref<IProductDetail>()
const loading = ref(false)
const router = useRouter()

/** 列配置 */
const columns: SjzyPartTableColumn[] = [
  {
    title: '名称',
    field: 'enum_name',
    width: 200,
    slot: 'enum_name',
  },
  {
    title: '地址',
    field: 'link',
    width: 200,
    isLink: true,
  },
  {
    title: '版本',
    field: 'version',
    width: 200,
    slot: 'version',
  },
]

/** 获取详情 */
async function getInfo() {
  loading.value = true
  const { data }: any = await GetProductDetail({ product_id: Number(route.params?.id) }).finally(
    () => {
      loading.value = false
    },
  )
  detailInfo.value = data || {}

  detailInfo.value!.client_info = data.client_info?.map((i: any) => {
    const { label, value, is_enable } = i
    const envData = i.extends
      ?.find((i: any) => i.field_name === 'client_env' && i.envData)
      ?.envData?.filter((i: any) => i.link)
    return {
      label,
      value,
      envData,
      is_enable,
    }
  })
  detailInfo.value!.microservice_info = data.microservice_info?.map((i: any) => {
    const { label, value, is_enable } = i
    const envData = i.extends
      ?.find((i: any) => i.field_name === 'microservice_env' && i.envData)
      ?.envData?.filter((i: any) => i.link)
    return {
      label,
      value,
      envData,
      is_enable,
    }
  })
}
/** 跳转终端详情 */
function handleHeadTerminalClick(item: Client_info) {
  router.push({ name: 'TerminalDetail', params: { id: item?.value } })
}
/** 跳转微服务详情 */
function handleHeadMicroClick(item: Client_info) {
  router.push({ name: 'MicroservicesDetail', params: { id: item.value } })
}

onMountedOrActivated(() => {
  getInfo()
})
</script>

<template>
  <div v-loading="loading" class="product-detail">
    <div class="h-70px flex flex-col justify-center bg-[var(--sjzy-bg)] p-x-24px">
      <div class="m-b-8px">
        <span class="text-16px fw-bold">{{ detailInfo?.product_name }}</span>
        <ElTag v-if="detailInfo?.is_enable === 0" type="info" size="small" class="m-l-10px">
          已关闭
        </ElTag>
      </div>
      <div>
        <div class="flex items-center">
          <div class="min-w-180px">
            创建时间：{{ detailInfo?.create_at }}
          </div>
          <div class="m-l-20px flex items-center">
            <span class="inline-block">终端：</span>
            <span class="flex-1"><SjzyText :model-value="detailInfo?.client_info?.map((i) => i.label)?.join(' / ')" /></span>
          </div>
          <div class="m-l-20px flex items-center">
            <span class="inline-block">微服务：</span>
            <span class="flex-1"><SjzyText
              :model-value="detailInfo?.microservice_info?.map((i) => i.label)?.join(' / ')"
            /></span>
          </div>
        </div>
      </div>
    </div>

    <div class="max-h-[calc(100%-70px)] overflow-y-auto p-[var(--sjzy-container-padding)]">
      <div class="sjzy-box p-0!">
        <SjzyPart title="终端环境" type="outline" header-border>
          <div class="p-x-12px">
            <SjzyPartTable
              v-for="item in detailInfo?.client_info"
              :key="item.value"
              :title="item.label"
              :data="item.envData"
              :columns="columns"
              @head-click="handleHeadTerminalClick(item)"
            >
              <template #afterTitle>
                <ElTag v-if="item?.is_enable === 0" link type="info" size="small">
                  已关闭
                </ElTag>
              </template>
              <template #enum_name="{ row }">
                <div>
                  {{ `${row.enum_name}(${row.enum_code})` }}
                </div>
              </template>
              <!-- 版本 -->
              <template #version="{ row }">
                <div> 版本号：{{ row.version }} </div>
              </template>
            </SjzyPartTable>
          </div>
        </SjzyPart>
      </div>

      <div class="sjzy-box m-t-12px p-0!">
        <SjzyPart title="微服务环境" type="outline" header-border>
          <div class="p-x-12px">
            <SjzyPartTable
              v-for="item in detailInfo?.microservice_info"
              :key="item.value"
              :title="item.label"
              :data="item.envData"
              :columns="columns"
              @head-click="handleHeadMicroClick(item)"
            >
              <template #afterTitle>
                <ElTag v-if="item?.is_enable === 0" link type="info" size="small">
                  已关闭
                </ElTag>
              </template>
              <template #enum_name="{ row }">
                <div>
                  {{ `${row.enum_name}(${row.enum_code})` }}
                </div>
              </template>
              <!-- 版本 -->
              <template #version="{ row }">
                <div> 版本号：{{ row.version }} </div>
              </template>
            </SjzyPartTable>
          </div>
        </SjzyPart>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-detail {
  width: 100%;
  height: 100%;
}
</style>
