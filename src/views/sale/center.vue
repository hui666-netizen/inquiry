<script lang="ts" setup>
import { onMounted } from 'vue'
import type { UploadProps } from 'element-plus'
import ImagePop from './components/ImagePop.vue'
import { UserGetUserBasicDetialInfoByIdPOST, UserIsRoleAdminPOST } from '@/api/user-user/User'
import { BusinessRoleGetBusinessRoleListByUserIdGET } from '@/api/user-businessRole/BusinessRole'
import { useUserStore } from '@/store/modules/user'
import { SalemanUpdateWeChatQrBySalemanId } from '@/api/cams-inquiry/Saleman'

defineOptions({
  name: 'CenterPerson',
})

const userStore = useUserStore()

/** 图片显示组件 */
const imagePopRef = ref<InstanceType<typeof ImagePop>>()

/** oss上传图片参数 */
const imageuploadParameters = {
  isAddWatermark: false,
  imageType: 'fptu',
  serviceCode: 'FMC',
}

const informationData = reactive<UserApi.GetUserListOutput>({
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

/** 是否公司业务员 */
const isBusiness = computed(() => (informationData.isBusiness ? '是' : '否'))

/** 业务角色 */
const businessRolesData = ref<any>([])

/** 是不是管理员 */
const administratorData = ref<boolean>(false)

const administrator = computed(() => (administratorData.value ? '管理员' : '非管理员'))

/** 基本信息 */
const basicinformationItems = computed(() => [
  { label: '账号', value: informationData.account },
  { label: '姓名', value: informationData.name },
  { label: '英文名', value: informationData.enName },
  { label: '绑定手机', value: informationData.telPhone },
  { label: '是否公司业务员', value: isBusiness },
  { label: '微信二维码' },
  { label: '公司', value: informationData.companyName },
  { label: '部门', value: informationData.deptName },
  {
    label: '可登录系统',
    value: `${informationData.canLoginSystemName?.split('、').slice(0, 2).join('、')}`,
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
      Object.assign(informationData, res.data)
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
        businessRolesData.value.push(item)
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

/** 显示弹框 */
function showImage() {
  imagePopRef.value?.onOpenImagePop()
}

/**
 *上传图片成功回调
 * @param response 接口返回值
 */
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  if (response.code === '200') {
    const params: InquiryApi.inquiryUpdateWeChatQrBySalemanIdRequest = {
      Key: response.data[0].key,
      SalemanId: userStore.userId as number,
    }
    console.log(params, 'params')
    SalemanUpdateWeChatQrBySalemanId(params).then((res) => {
      if (res.code === '200') {
        $baseMessage('上传成功', 'success')
      }
      else {
        $baseMessage(res.Msg, 'error')
      }
    })
  }
}

/**
 * 判断文件类型是否有效
 * @param {File} file - 原始文件对象
 * @param {string[]} allowedTypes - 允许的文件类型列表
 * @returns {boolean} 如果文件类型在允许的类型列表中，返回true，否则返回false
 */
function isValidFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type)
}

// 定义文件大小校验函数
/**
 * 判断文件大小是否在允许范围内
 * @param {File} file - 原始文件对象
 * @param {number} maxSizeMB - 允许的最大文件大小（单位：MB）
 * @returns {boolean} 如果文件大小不超过最大值，返回true，否则返回false
 */
function isValidFileSize(file: File, maxSizeMB: number): boolean {
  return file.size / 1024 / 1024 <= maxSizeMB
}

/** 上传图片限制 */
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log(rawFile, 'rawFile')

  // 允许的文件类型
  const allowedTypes: string[] = ['image/jpg', 'image/png', 'image/svg', 'image/jpeg']
  // 允许的最大文件大小，单位：MB
  const maxSizeMB: number = 10

  if (!isValidFileType(rawFile, allowedTypes)) {
    $baseMessage('图片仅支持JPG、PNG、SVG文件格式', 'error')
    return false
  }
  else if (!isValidFileSize(rawFile, maxSizeMB)) {
    $baseMessage('文件大小不能超过10M', 'error')
    return false
  }
  return true
}

onMounted(() => {
  getInformationData()
  getBusinessRolesData()
  isAdmin()
})
</script>

<template>
  <div class="center-person">
    <div class="center-person-content">
      <div class="center-person-content-Information">
        <ElDescriptions class="margin-top" title="基本信息" :column="3" size="default" border>
          <ElDescriptionsItem
            v-for="(item, index) in basicinformationItems"
            :key="index"
            :label="item.label"
            width="250px"
            label-align="right"
          >
            <div v-if="item.label !== '微信二维码'">
              {{ item.value }}
            </div>
            <div v-else class="flex items-center">
              <p class="mr-2 cursor-pointer text-blue-500" @click="showImage">
                查看图片
              </p>
              <ElUpload
                action="https://uploadapi.dev.shijizhongyun.com/Upload/ImageToOSS"
                :data="imageuploadParameters"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :show-file-list="false"
              >
                <template #trigger>
                  <ElButton> 选择文件 </ElButton>
                </template>
              </ElUpload>
            </div>
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>

      <div class="center-person-content-Information">
        <ElDescriptions
          class="margin-top"
          title="业务角色"
          direction="vertical"
          :column="3"
          size="default"
          border
        >
          <ElDescriptionsItem label="业务角色名称">
            <ElTable :data="businessRolesData" border style="width: 100%" :show-header="false">
              <ElTableColumn prop="name" />
            </ElTable>
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>

      <div class="center-person-content-Information">
        <ElDescriptions
          class="ma-rgin-top-10"
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
    <ImagePop ref="imagePopRef" />
  </div>
</template>

<style lang="scss" scoped>
.center-person {
  width: 100%;
  height: 100%;
  padding-top: 10px;

  .center-person-content {
    width: 1660px;
    padding: 0 20px;
    margin: auto;
    background-color: #fff;

    .center-person-content-Information {
      padding: 5px 0 15px;
    }
  }
}
</style>
