<script lang="ts" setup>
import { SjzyForm, SjzyModal, SjzySelect, useModal, useSjzyForm } from '@sjzy/ui'
import { ElMessageBox } from 'element-plus'
import { EnterprisePopSchemas, typeDropDownData } from '../data'
import {
  CompanyCompanyAuthenticationAudit,
  CompanyGetCompanyInfo,
} from '@/api/cams-inquiry/Company'
import { CustomerModifyCustomerType } from '@/api/cams-inquiry/Customer'

defineOptions({
  name: 'EnterprisePop',
})

/** 刷新表格 */
const emit = defineEmits<{
  reload: []
}>()

/** 获取用户信息 */
const userStore = useUserStore()

/** 用户id */
const customerId = ref<number>()

/** 用户类型 */
const customerType = ref<number>(1)

/** 接口返回数据 */
const modelData = ref<InquiryApi.inquiryGetCompanyInfoResponseData>()

/** 引入弹框 */
const [modalRegister, { setModalProps, closeModal }] = useModal()

/** 表单 */
const [registerPop, { validate }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: EnterprisePopSchemas,
})

/** 点击认证资料 */
async function onModalClick(row: { CustomerId: number | undefined, CustomerType: number }) {
  customerId.value = row.CustomerId
  customerType.value = row.CustomerType

  // 获取企业信息
  const {
    data: { Data, Msg },
  } = await CompanyGetCompanyInfo({ CustomerId: row.CustomerId })
  if (!Msg) {
    modelData.value = Data
  }
  else {
    modelData.value = {}
  }

  setModalProps({
    title: '审核',
    width: '800px',
    visible: true,
    showCancelBtn: false,
    okText: '审核通过',
  })
}

/** 审核通过 */
async function handleSave() {
  const flag = await validate()
  if (flag) {
    ElMessageBox.confirm(`${t('是否确认通过')}`, `${t('提示')}`, {
      type: 'warning',
      lockScroll: false,
      center: false,
      customClass: 'sjzy-hey-message-box',
      confirmButtonText: t('确定'),
    }).then(() => {
      const params: InquiryApi.inquiryCompanyAuthenticationAuditRequest = {
        CompanyId: modelData.value?.CompanyId,
        CustomerId: customerId.value,
        IsPass: 1,
        ReviewedPersonId: userStore.userId as number,
      }
      CompanyCompanyAuthenticationAudit(params).then(() => {
        closeModal()
        emit('reload')
      })
    })
  }
}

/** 审核不通过 */
async function handleCancel() {
  const flag = await validate()
  if (flag) {
    ElMessageBox.confirm(`${t('是否确认不通过')}`, `${t('提示')}`, {
      type: 'warning',
      lockScroll: false,
      center: false,
      customClass: 'sjzy-hey-message-box',
      confirmButtonText: t('确定'),
    }).then(() => {
      const params: InquiryApi.inquiryCompanyAuthenticationAuditRequest = {
        CompanyId: modelData.value?.CompanyId,
        CustomerId: customerId.value,
        IsPass: 0,
        ReviewedPersonId: userStore.userId as number,
      }
      CompanyCompanyAuthenticationAudit(params).then(() => {
        closeModal()
        emit('reload')
      })
    })
  }
}

/** 修改客户类型 */
function handleChange() {
  CustomerModifyCustomerType({
    CustomerId: customerId.value,
    CustomerType: customerType.value,
  })
    .then(() => {
      $baseMessage('修改成功', 'success')
      emit('reload')
    })
    .catch((err: any) => {
      console.log(err)
    })
}

defineExpose({
  onModalClick,
})
</script>

<template>
  <div class="enterprise-pop">
    <!-- 弹窗 -->
    <SjzyModal show-footer @register="modalRegister" @ok="handleSave()">
      <SjzyForm :model="modelData" @register="registerPop">
        <template #CompanyLisecePic_default>
          <div class="img-box">
            <img :src="modelData?.CompanyLisecePic" alt="" srcset="">
          </div>
        </template>
        <template #LegalPersonIdCardBackPic_default>
          <div class="img-box">
            <img :src="modelData?.LegalPersonIdCardBackPic" alt="" srcset="">
          </div>
        </template>
        <template #LegalPersonIdCardFrontPic_default>
          <div class="img-box">
            <img :src="modelData?.LegalPersonIdCardFrontPic" alt="" srcset="">
          </div>
        </template>
      </SjzyForm>
      <template #beforeFooter>
        <div class="flex">
          <div class="mr-2 flex items-center">
            客户类型
          </div>
          <SjzySelect
            v-model="customerType"
            class="w-120px"
            :clearable="false"
            :options="{
              spareData: typeDropDownData,
              labelKey: ['label'],
              valueKey: 'value',
            }"
            @select-change="handleChange"
          />
        </div>
      </template>
      <template #centerFooter>
        <ElButton @click="handleCancel">
          审核不通过
        </ElButton>
      </template>
    </SjzyModal>
  </div>
</template>

<style lang="scss" scoped>
.enterprise-pop {
  width: 100%;
  height: 100%;
}

.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 235px;
  background: #ccc;

  img {
    max-width: 235px;
    max-height: 235px;
    overflow: hidden;
  }
}
</style>
