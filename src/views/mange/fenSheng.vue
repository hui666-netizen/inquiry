<script lang="ts" setup>
import Region from './components/Region.vue'
import {
  ProvincedivisionFindByProvinceId,
  ProvincedivisionUpdateProvincedivision,
} from '@/api/cams-inquiry/Provincedivision'

defineOptions({
  name: 'Fensheng',
})

const dataList = ref<InquiryApi.inquiryProvinceDivision[]>([])
const loading = ref(false)
/**
 * 判断数组是否包含一个空对象
 * @param {InquiryApi.inquiryProvince[]} value - 要检查的值
 * @returns {boolean} 如果是包含一个空对象的数组，则返回true；否则返回false
 */
function isArrayWithEmptyObject(value: InquiryApi.inquiryProvince[]) {
  if (Array.isArray(value) && value.length === 1) {
    const firstElement = value[0]
    return (
      typeof firstElement === 'object'
      && firstElement !== null
      && Object.keys(firstElement).length === 0
    )
  }
  return false
}

/**
 * 通过省份ID查询省份划分数据，并处理省份数组为空对象的情况
 */
function reloadSheng() {
  loading.value = true
  ProvincedivisionFindByProvinceId({
    PageIndex: 1,
    PageSize: 50,
  })
    .then((res) => {
      dataList.value = res.data.Data?.List || []
      dataList.value.forEach((item) => {
        if (isArrayWithEmptyObject(item.Province as InquiryApi.inquiryProvince[])) {
          item.Province = []
        }
      })
    })
    .catch(() => {
      $baseMessage('操作失败', 'error')
    })
    .finally(() => {
      loading.value = false
    })
}

/**
 * 保存修改后的省份划分数据
 */
function saveSheng() {
  const simplifiedRegions: InquiryApi.inquiryUpdateProvinceDivision[] | undefined
    = dataList.value?.map(region => ({
      RegionName: region.RegionName,
      ProvinceIds: region.Province?.map((item: any) => item.ProvinceId),
    }))
  ProvincedivisionUpdateProvincedivision({
    List: simplifiedRegions,
  })
    .then(() => {
      $baseMessage('保存成功', 'success')
    })
    .catch(() => {
      $baseMessage('保存失败', 'error')
    })
    .finally(() => {
      reloadSheng()
    })
}

reloadSheng()
</script>

<template>
  <div class="p-2">
    <div class="sjzy-box" style="height: 100%">
      <div class="top">
        <ElButton type="primary" @click="saveSheng">
          保存
        </ElButton>
      </div>
      <div class="xian" />
      <div v-loading="loading" class="main">
        <Region
          v-for="item in dataList"
          :key="item as PropertyKey"
          v-model:list="item.Province as InquiryApi.inquiryProvince[]"
          :text="item.RegionName || ''"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: end;
}

.xian {
  height: 1px;
  margin-top: 10px;
  background-color: rgb(235, 229, 229);
}

.main {
  display: grid;
  grid-template-rows: 49.5% 49.5%;
  grid-template-columns: 49.5% 49.5%;
  gap: 1%;
}
</style>
