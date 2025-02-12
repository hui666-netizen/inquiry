<script lang="ts" setup>
import { SjzyTableV2, useSjzyTable } from '@sjzy/ui'
import { CopyDocument } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import type { EnvData, FieldItem, TerminalUnit } from './type'
import { GetClientDetail } from '@/api/devops/zhongduanguanli'
import { GetEnumGet } from '@/api/devops/tongyong'

defineOptions({
  name: 'TerminalDetail',
})

const envData = ref<EnvData[]>([])
const route = useRoute()
const detailData = ref<Recordable>()
const terminalType = ref<TerminalUnit[]>([])
const loading = ref<boolean>(false)

// 全局配置的也可以单独配置
const [tableRegister] = useSjzyTable({
  tableRowId: 'enum_value',
  autoHeight: false,
  showPager: false,
  showIndex: false,
  isCellSort: true,
  showAction: false,
  showHeader: false,
  border: 'inner',
  columns: [
    {
      field: 'enum_name',
      title: '终端名称',
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

/**
 * 获取详情
 */
async function GetClientDetailData() {
  try {
    loading.value = true
    const res = await GetClientDetail({ client_id: String(route.params?.id) })
    detailData.value = res.data
    const data: Array<EnvData> = detailData.value.extends.filter(
      (item: FieldItem) => item.field_name === 'client_env',
    )[0].envData
    envData.value = data.filter((item: EnvData) => item.link)
  }
  finally {
    loading.value = false
  }
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
  GetEnumGet({ code: 'env' }, {}).then((res: Recordable) => {
    terminalType.value = res.data
  })
  GetClientDetailData()
})
</script>

<template>
  <div v-loading="loading" class="terminalSettings-detail">
    <div class="h-70px flex flex-col justify-center bg-[var(--sjzy-bg)] p-x-24px">
      <div class="m-b-8px">
        <span class="text-16px fw-bold">{{ detailData?.client_name }}</span>
        <ElTag v-if="detailData?.is_enable === 0" type="info" size="small" class="m-l-10px">
          已关闭
        </ElTag>
      </div>
      <div>
        <span>创建时间：{{ detailData?.create_at }}</span>
      </div>
    </div>

    <div class="h-[calc(100%-70px)] overflow-y-auto p-[var(--sjzy-container-padding)]">
      <div class="sjzy-box h-100% p-0!">
        <SjzyPart title="终端环境" type="outline" header-border>
          <div class="p-x-12px p-b-12px">
            <SjzyTableV2 v-model="envData" @register="tableRegister">
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
.terminalSettings-detail {
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
