<script lang="ts" setup>
import { SjzyModal, useModal } from '@sjzy/ui'
import { SalemanCheckWeChatQrBySalemanId } from '@/api/cams-inquiry/Saleman'

defineOptions({
  name: 'ImagePop',
})

const userStore = useUserStore()

const imgUrl = ref<string>('')

/** 引入弹框 */
const [modalRegister, { setModalProps }] = useModal()

/** 获取图片 */
function getSalemanCheckWeChatQrBySalemanId() {
  SalemanCheckWeChatQrBySalemanId({
    SalemanId: userStore.userId as number,
  })
    .then(({ data: { Code, Url } }) => {
      if (Code === 200) {
        imgUrl.value = Url as string
      }
      else {
        $baseMessage('没有上传过', 'error')
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

/** 打开弹框 */
function onOpenImagePop() {
  getSalemanCheckWeChatQrBySalemanId()
  if (imgUrl.value) {
    setModalProps({
      title: '您的微信二维码',
      width: '300px',
      visible: true,
      showCancelBtn: false,
      showOkBtn: false,
    })
  }
}

defineExpose({
  onOpenImagePop,
})
</script>

<template>
  <div class="p-2">
    <!-- 弹窗 -->
    <SjzyModal @register="modalRegister">
      <div class="image-pop">
        <img :src="imgUrl" alt="" srcset="">
      </div>
    </SjzyModal>
  </div>
</template>

<style lang="scss" scoped>
.image-pop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 252px;
  height: 200px;
  background-color: #ccc;

  img {
    max-width: 252px;
    max-height: 200px;
    overflow: hidden;
  }
}
</style>
