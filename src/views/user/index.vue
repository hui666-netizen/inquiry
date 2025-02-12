<script lang="ts" setup>
import { onMounted } from 'vue'
import { UserGetUserBasicDetialInfoByIdPOST, UserIsRoleAdminPOST } from '@/api/user-user/User'
import { BusinessRoleGetBusinessRoleListByUserIdGET } from '@/api/user-businessRole/BusinessRole'
import { useUserStore } from '@/store/modules/user'

defineOptions({
  name: 'User',
})

const userStore = useUserStore()

const InformationData = reactive<UserApi.GetUserListOutput>({
  account: '',
  name: '',
  enName: '',
  telPhone: '',
  isBusiness: true,
  isEnable: true,
  companyName: '',
  deptName: '',
  canLoginSystemName: '',
})

const isBusiness = computed(() => (InformationData.isBusiness ? '是' : '否'))

const isEnable = computed(() => (InformationData.isEnable ? '启用' : '禁用'))

/** 业务角色 */
const BusinessRolesData = ref<any>([])

const administratorData = ref<boolean>(false)

const administrator = computed(() => (administratorData.value ? '管理员' : '非管理员'))

/** 基本信息 */
const basicinformationItems = computed(() => [
  { label: '账号', value: InformationData.account },
  { label: '姓名', value: InformationData.name },
  { label: '英文名', value: InformationData.enName },
  { label: '绑定手机', value: InformationData.telPhone },
  { label: '是否公司业务员', value: isBusiness },
  { label: '状态', value: isEnable },
  { label: '公司', value: InformationData.companyName },
  { label: '部门', value: InformationData.deptName },
  {
    label: '可登录系统',
    value: `${InformationData.canLoginSystemName?.split('、').slice(0, 2).join('、')}`,
  },
])

/** 系统角色 */
const systemrolesItem = computed(() => [
  { label: '序号', value: '1' },
  { label: '子系统', value: '干线物流3.0' },
  { label: '角色名称', value: administrator },
  { label: '角色类型', value: '个人' },
  { label: '权限来源', value: '角色分配' },
])

/** 获取用户信息 */
function getInformationData() {
  UserGetUserBasicDetialInfoByIdPOST({
    userId: userStore.userId as number,
  }).then((res) => {
    if (res.data) {
      console.log(res.data, 'res.data')

      Object.assign(InformationData, res.data)
    }
  })
}

/** 获取业务角色 */
function getBusinessRolesData() {
  BusinessRoleGetBusinessRoleListByUserIdGET({
    userId: userStore.userId as number,
  }).then((res) => {
    if (res.data) {
      res.data.forEach((item) => {
        BusinessRolesData.value.push(item)
      })
    }
  })
}

/** 判断是否是管理员 */
function isAdmin() {
  UserIsRoleAdminPOST({
    systemId: 1019,
    userId: userStore.userId as number,
  }).then((res) => {
    if (res.code === '200') {
      administratorData.value = res.data
    }
  })
}

onMounted(() => {
  getInformationData()
  getBusinessRolesData()
  isAdmin()
})
</script>

<template>
  <div class="user">
    <div class="user-content">
      <div class="user-content-Information">
        <ElDescriptions class="margin-top" title="基本信息" :column="3" size="default" border>
          <ElDescriptionsItem
            v-for="(item, index) in basicinformationItems"
            :key="index"
            :label="item.label"
            width="250px"
            label-align="right"
          >
            {{ item.value }}
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>

      <div class="user-content-Information">
        <ElDescriptions
          class="margin-top"
          title="业务角色"
          direction="vertical"
          :column="3"
          size="default"
          border
        >
          <ElDescriptionsItem label="业务角色名称">
            <ElTable :data="BusinessRolesData" border style="width: 100%" :show-header="false">
              <ElTableColumn prop="name" />
            </ElTable>
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>

      <div class="user-content-Information">
        <ElDescriptions
          class="margin-top"
          title="系统角色"
          direction="vertical"
          :column="5"
          size="default"
          border
        >
          <ElDescriptionsItem
            v-for="(item, index) in systemrolesItem"
            :key="index"
            :label="item.label"
          >
            {{ item.value }}
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  padding-top: 10px;

  .user-content {
    width: 1660px;
    padding: 0 20px;
    margin: auto;
    background-color: #fff;

    .user-content-Information {
      padding: 5px 0 15px;
    }
  }
}
</style>
