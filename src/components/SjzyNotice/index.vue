<script lang="ts" setup>
import cookie from 'js-cookie'
import { useRouter } from 'vue-router'
import { FeNotice } from '@sjzy/ui'
import tongzhiSvg from '@/assets/svg/tongzhi.svg?raw'
import config from '@/config'
import { MsgRecordGetNotifyPOST, MsgRecordSetReadingMsgPOST } from '@/api/user-msgInfo/MsgRecord'
import { MsgSubscribeInstanceSendHistoryMessageBySystemGET } from '@/api/user-msgInstance/MsgSubscribeInstance'

import { useUserStore } from '@/store/index'
import envConfig from '@/config/proxy.config'

// UMC        用户中心
// LMS        图书管理系统
// RMC        报表中心
// OMC        订单中心
// PMC        支付中心
// CMC        客户中心
// MC        主数据中心
// IP        接口通
// FMC        财务中心
// YLWOMS        运连网OMS
// WFC        流程中心
// YLWWMS        运连网仓管中心
// YLWTMS        运连网TMS
// Contract        合同中心
// CAMS        干线物流
// BDTMS        柏电TMS
// BDWMS        柏电仓管中心
// BDOMS        柏电OMS
// 111        测试子系统1
// PSDemo        流程示例系统
// MIDDLE        业务中台
// interface IListItem {
//   subsystemName: string
//   subsystemId: any
//   taskName: string
//   isProgress: boolean
//   statusName: string
//   status: keyof IStatusTextColor
//   createTime: string
//   progressbar: number
// }
// 通过formConfig的形式来把数据进行转化
type IListShineUpon = {
  taskCount: { [x: string]: any }
  msgCount: {
    [x: string]: any
  }
  flowCount: {
    [x: string]: any
  }
}
// 消息标题list里面的count字段的类型
type IHeaderCountObj = {
  [key in keyof IListShineUpon]: number
}

type IListDataObj = {
  [key in keyof IHeaderCountObj]: any
}
const userStore = useUserStore()
const router = useRouter()

const tabsStore = useTabsStore()
const mode = import.meta.env.MODE
// 去掉自带的 Bearer  不然 singal的请求 会带两个 Bearer
const token = cookie.get(`${mode}_${config.tokenTableName}`)
const { subSysId } = userStore

const debounceChangeMsg = useDebounceFn(handleChangeMsgStatus, 300)
const drawerModel = ref(false)
const noticeToken = ref(token?.toString().replace('Bearer ', ''))

const listData = ref<any[]>([])
// 根据类型额外处理的事件 要额外处理一些事件
const functionObj: IListDataObj = {
  msgCount: (row: any) => {
    const msgId = row.msgIdArr
    debounceChangeMsg(msgId)
  },
  flowCount: () => {},
  taskCount: () => {},
}
// list data 根据不同的类型 来进行不同的映射
const ListShineUpon: IListShineUpon = {
  taskCount: {
    // id: 'id',
  },
  msgCount: {
    msgTitle: 'taskName',
    msgTypeName: 'statusName',
    sendTime: 'createTime',
  },
  flowCount: {
    title: 'taskName',
    createUserName: 'statusName',
  },
}
// 消息的总数
const noticeValue = ref(0)
// 消息弹窗内部的tabs的数据
const headerList = ref<{ name: string, count: number, type: keyof IHeaderCountObj }[]>([
  { name: '消息', type: 'msgCount', count: 0 },
  { name: '任务', type: 'taskCount', count: 0 },
  { name: '流程', type: 'flowCount', count: 0 },
])

// 消息接受的地址 //
// `//userapi-dev.default.svc.cluster.local:5020/signalr-hubs/usercentermessage`
//  https://entrance.test.shijizhongyun.com/userApi
// `${envConfig.userApi}/userApi/signalr-hubs/usercentermessage`

const proxyApi = ref(`${envConfig.userApi}/userApi/signalr-hubs/usercentermessage?systemKey=DevOps`)

// 所有的消息(流程,消息,任务)的listData的集合 通过 key进行分发
let listDataObj: IListDataObj = {
  msgCount: [],
  taskCount: [],
  flowCount: [],
}
// 获取全部的消息数据 只在刷新页面才获取 再就不获取了
async function getNoticeList() {
  const userId: number | undefined = userStore.userId ? Number(userStore.userId) : 0

  const {
    code,
    data: { total, taskCount, flowCount, msgCount, flowRes, msgRes, taskRes },
  } = await MsgRecordGetNotifyPOST({
    pageIndex: 1,
    pageSize: 20,
    userId,
    systemId: Number(subSysId), // 其他子系统传自己的子系统id中转中心才传0
    // userId: 5798,
    // systemId: 109,
  })
  if (code === '200') {
    noticeValue.value = total || 0
    listDataObj = {
      flowCount: setNoticeList(flowRes?.list || []),
      msgCount: setNoticeList(msgRes?.list || []),
      taskCount: taskRes?.list || [],
    }
  }
  // 设置消息内部的切换的数据的count
  setNoticeHeaderList({
    taskCount: taskCount || 0,
    flowCount: flowCount || 0,
    msgCount: msgCount || 0,
  })
}
// 拼接列表的字段（如果不是任务 随机给个字体颜色
function setNoticeList(noticeArrs: any[]): any[] {
  let returnArr: any[] = []
  returnArr = noticeArrs.map((v) => {
    v.taskNameStatus = v.pcUrl ? 1 : 6
    return v
  })
  return returnArr
}
// 消息已读
function handleChangeMsgStatus(msgId: any[]) {
  MsgRecordSetReadingMsgPOST(msgId).then(({ code }) => {
    if (code === '200') {
      getNoticeList().then(() => {
        handleNoticeTabsChange('msgCount')
      })
    }
  })
}
// 消息点击切换的时候切换展示的数据
function handleNoticeTabsChange(type: keyof IListDataObj) {
  const activaList: any[] = listDataObj[type]
  const activeShineUpon = ListShineUpon[type]
  let newArr: any[] = []
  newArr = activaList?.map((v) => {
    for (const key in activeShineUpon) {
      if (Object.prototype.hasOwnProperty.call(ListShineUpon[type], key)) {
        const element = activeShineUpon[key]
        v[element] = v[key]
      }
    }
    return v
  })
  listData.value = newArr
}
// 拼接 头部的数据
function setNoticeHeaderList(countObj: IHeaderCountObj) {
  headerList.value.forEach((v) => {
    if (countObj[v.type])
      v.count = countObj[v.type]
  })
}

// 这里只是用一下类型 和消息的栏目数量没有相关性
const taskObj: IHeaderCountObj = {
  msgCount: 0,
  taskCount: 1,
  flowCount: 2,
}
function handleNotificationClick(msgTypeId?: number) {
  tabsStore.delVisitedRoute('/microAppMid/messageSubscription/msgLookMore')

  router.push({
    path: '/microAppMid/messageSubscription/msgLookMore',
    query: { active: 0, msgTypeId, time: Date.now() },
  })
}

function handleClickLook(type: string) {
  drawerModel.value = false
  router.push({
    path: '/microAppMid/messageSubscription/msgLookMore',
    query: { active: taskObj[type as keyof IListShineUpon] },
  })
}

function handleClickReplaceUrl(type: keyof IListShineUpon, row: any) {
  if (!row.pcUrl)
    return

  // 根据类型额外处理的事件 要额外处理一些事件
  row.msgIdArr = [row.id]
  functionObj[type](row)
  // 当点击的是单行的时候
  const url = row.pcUrl
  if (url) {
    drawerModel.value = false
    window.open(url, '_blank')
  }
}

function totalHandleClick(msgTypeId?: number) {
  tabsStore.delVisitedRoute('/microAppMid/messageSubscription/msgLookMore')

  router.push({
    path: '/microAppMid/messageSubscription/msgLookMore',
    query: { active: 0, msgTypeId, time: Date.now() },
  })
}

onMounted(() => {
  setTimeout(() => {
    MsgSubscribeInstanceSendHistoryMessageBySystemGET({
      systemId: subSysId,
    })
  }, 3000)
})
getNoticeList()
</script>

<template>
  <div class="icon-btn h-full cursor-pointer hover:bg-[#f6f6f6] dark:hover:bg-[#333]">
    <FeNotice
      v-model:drawer-model="drawerModel"
      class="cursor-pointer"
      :value="noticeValue"
      :token="noticeToken"
      :list-data="listData"
      :proxy-api="proxyApi"
      :header-list="headerList"
      :sub-sys-id="subSysId"
      @get-new-msg="getNoticeList"
      @notification-click="handleNotificationClick"
      @tabs-change="handleNoticeTabsChange"
      @task-all-click="handleClickLook"
      @total-handle-click="totalHandleClick"
      @task-item-click="handleClickReplaceUrl"
    >
      <SjzyIcon :size="14" :icon="tongzhiSvg" is-custom-svg />
    </FeNotice>
  </div>

  <div v-show="false" class="h-70px h-75px p-x-10 p-t-4px p-t-7px" />
</template>
