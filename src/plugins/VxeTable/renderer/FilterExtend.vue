<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent, reactive } from 'vue'
import type { VxeGlobalRendererHandles } from 'vxe-table'
import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'

export default defineComponent({
  name: 'FilterExtend',
  props: {
    params: Object as PropType<VxeGlobalRendererHandles.RenderFilterParams>,
  },
  setup(props) {
    type CaseItem = {
      label: string
      value: string
    }
    const demo1 = reactive({
      option: null as any,
      colValList: [] as string[],
      caseGroups: [
        [
          { value: 'equal', label: '等于' },
          { value: 'ne', label: '不等于' },
        ],
        [
          { value: 'greater', label: '大于' },
          { value: 'ge', label: '大于或等于' },
          { value: 'less', label: '小于' },
          { value: 'le', label: '小于或等于' },
        ],
      ] as CaseItem[][],
    })
    const searchList = computed(() => {
      const { option, colValList } = demo1
      if (option) {
        return option.data.sVal
          ? colValList.filter(val => val.includes(option.data.sVal))
          : colValList
      }
      return []
    })
    const load = () => {
      const { params } = props
      if (params) {
        const { $table, column } = params
        const { fullData } = $table.getTableData()
        const option = column.filters[0]
        const colValList = Object.keys(XEUtils.groupBy(fullData, column.field))
        demo1.option = option
        demo1.colValList = colValList
      }
    }
    const sAllEvent = () => {
      const { option } = demo1
      if (option) {
        const { data } = option
        if (data.vals.length > 0)
          data.vals = []
        else data.vals = demo1.colValList
      }
    }
    const sItemEvent = (val: string) => {
      const { option } = demo1
      if (option) {
        const { data } = option
        const vIndex = data.vals.indexOf(val)
        if (vIndex === -1)
          data.vals.push(val)
        else data.vals.splice(vIndex, 1)
      }
    }
    const confirmFilterEvent = () => {
      const { params } = props
      const { option } = demo1
      if (params && option) {
        const { data } = option
        const { $panel } = params
        data.f1 = ''
        data.f2 = ''
        $panel.changeOption(null, true, option)
        $panel.confirmFilter()
      }
    }
    const resetFilterEvent = () => {
      const { params } = props
      if (params) {
        const { $panel } = params
        $panel.resetFilter()
      }
    }
    const childMenuClickEvent = (cItem: CaseItem) => {
      VXETable.modal.alert({ content: cItem.label })
    }
    load()
    return {
      demo1,
      searchList,
      sAllEvent,
      sItemEvent,
      confirmFilterEvent,
      resetFilterEvent,
      childMenuClickEvent,
    }
  },
})
</script>

<template>
  <div class="my-filter-excel">
    <div class="my-fe-top">
      <ul class="my-fe-menu-group">
        <li class="my-fe-menu-link">
          <span>升序</span>
        </li>
        <li class="my-fe-menu-link">
          <span>倒序</span>
        </li>
      </ul>
      <ul class="my-fe-menu-group">
        <li class="my-fe-menu-link" @click="resetFilterEvent">
          <span>清除筛选</span>
        </li>
        <li class="my-fe-menu-link">
          <i class="vxe-icon-question-circle-fill my-fe-menu-link-left-icon" />
          <span>筛选条件</span>
          <i class="vxe-icon-question-circle-fill my-fe-menu-link-right-icon" />
          <div class="my-fe-menu-child-list">
            <ul
              v-for="(cList, gIndex) in demo1.caseGroups"
              :key="gIndex"
              class="my-fe-child-menu-group-list"
            >
              <li
                v-for="(cItem, cIndex) in cList"
                :key="cIndex"
                class="my-fe-child-menu-item"
                @click="childMenuClickEvent(cItem)"
              >
                <span>{{ cItem.label }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="my-fe-search">
      <div class="my-fe-search-top">
        <input v-model="demo1.option.data.sVal" placeholder="搜索">
        <i class="vxe-icon-question-circle-fill my-fe-search-icon" />
      </div>
      <ul class="my-fe-search-list">
        <li class="my-fe-search-item" @click="sAllEvent">
          <i class="vxe-icon-question-circle-fill my-fe-search-item-icon" />
          <span>(全选)</span>
        </li>
        <li
          v-for="(val, sIndex) in searchList"
          :key="sIndex"
          class="my-fe-search-item"
          @click="sItemEvent(val)"
        >
          <i
            :class="[
              demo1.option.data.vals.indexOf(val) === -1
                ? 'vxe-icon-question-circle-fill my-fe-search-item-icon'
                : 'vxe-icon-question-circle-fill my-fe-search-item-icon',
            ]"
          />
          <span>{{ val }}</span>
        </li>
      </ul>
    </div>
    <div class="my-fe-footer">
      <VxeButton status="primary" @click="confirmFilterEvent">
        确认
      </VxeButton>
      <VxeButton @click="resetFilterEvent">
        重置
      </VxeButton>
    </div>
  </div>
</template>

<style>
.my-filter-excel {
  user-select: none;
}

.my-filter-excel .my-fe-top .my-fe-menu-group {
  position: relative;
  padding: 0;
  margin: 0;
}

.my-filter-excel .my-fe-top .my-fe-menu-group::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 190px;
  content: '';
  border-bottom: 1px solid #e2e4e7;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link {
  position: relative;
  padding: 4px 20px 4px 30px;
  cursor: pointer;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link:hover {
  background-color: #c5c5c5;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link-left-icon {
  position: absolute;
  top: 6px;
  left: 10px;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link-right-icon {
  position: absolute;
  top: 6px;
  right: 10px;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link:hover .my-fe-menu-child-list {
  display: block;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-menu-child-list {
  position: absolute;
  top: 0;
  right: -120px;
  display: none;
  width: 120px;
  background-color: #fff;
  border: 1px solid #dadce0;
  box-shadow: 3px 3px 4px -2px rgba(0, 0, 0, 0.6);
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list {
  position: relative;
  padding: 0;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 90px;
  content: '';
  border-bottom: 1px solid #e2e4e7;
}

.my-filter-excel
  .my-fe-top
  .my-fe-menu-group
  .my-fe-menu-link
  .my-fe-child-menu-group-list
  > .my-fe-child-menu-item {
  position: relative;
  padding: 4px 20px 4px 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.my-filter-excel
  .my-fe-top
  .my-fe-menu-group
  .my-fe-menu-link
  .my-fe-child-menu-group-list
  > .my-fe-child-menu-item:hover {
  background-color: #c5c5c5;
}

.my-filter-excel .my-fe-search {
  padding: 0 10px 0 30px;
}

.my-filter-excel .my-fe-search .my-fe-search-top {
  position: relative;
  padding: 5px 0;
}

.my-filter-excel .my-fe-search .my-fe-search-top > input {
  width: 200px;
  height: 22px;
  padding: 0 20px 0 2px;
  line-height: 22px;
  border: 1px solid #ababab;
}

.my-filter-excel .my-fe-search .my-fe-search-top > .my-fe-search-icon {
  position: absolute;
  top: 10px;
  right: 5px;
}

.my-filter-excel .my-fe-search .my-fe-search-list {
  height: 140px;
  padding: 2px 10px;
  margin: 0;
  overflow: auto;
  border: 1px solid #e2e4e7;
}

.my-filter-excel .my-fe-search .my-fe-search-list .my-fe-search-item {
  padding: 2px 0;
  cursor: pointer;
}

.my-filter-excel .my-fe-search .my-fe-search-list .my-fe-search-item .my-fe-search-item-icon {
  width: 16px;
}

.my-filter-excel .my-fe-footer {
  padding: 10px 10px 10px 0;
  text-align: right;
}

.my-fe-popup .my-fe-popup-filter {
  padding-left: 30px;
}

.my-fe-popup .my-fe-popup-filter > .my-fe-popup-filter-select {
  width: 120px;
}

.my-fe-popup .my-fe-popup-filter > .my-fe-popup-filter-input {
  width: 380px;
  margin-left: 15px;
}

.my-fe-popup .my-fe-popup-describe {
  padding: 20px 0 10px;
}

.my-fe-popup .my-fe-popup-concat {
  padding-left: 50px;
}

.my-fe-popup .my-fe-popup-footer {
  text-align: right;
}
</style>
