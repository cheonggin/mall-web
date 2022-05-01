<template>
  <div class="profile-setting">
    <ProfileNav title="个人中心" />

    <div class="wrapper ignore">
      <van-uploader
        upload-text="点击上传本地图片"
        v-model="fileList"
        :after-read="handleUpload"
      >
      </van-uploader>
      <van-button type="primary" @click="updateAvatar" >更新头像</van-button>
    </div>

    <ProfileFooter title="退出账号" @after-click="logout" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast, UploaderFileListItem } from 'vant'
import { useLoginStore } from '@/store/login/login'

import ProfileNav from './profile-nav.vue'
import ProfileFooter from './profile-footer.vue'
import { localCache } from '@/utils/cache'
import { IUserInfo } from '@/store/login/types'
import { uploadAvatar } from '@/service'

const router = useRouter()
const loginStore = useLoginStore()
const fileList = ref<UploaderFileListItem[]>([])

async function handleUpload (file: any) {
  const formData = new FormData()
  formData.append('file', file.file)

  // 上传本地图片
  const { data } = await uploadAvatar(formData)
  fileList.value = [data]
}

async function updateAvatar () {
  await loginStore.updateUserAvatarAction(fileList.value[0].url as string)
}

// 退出登录
function logout () {
  localCache.clearCache()

  // 修改pinia中的值
  loginStore.loginState = false
  loginStore.userInfo = {} as IUserInfo

  Toast.success('退出账号成功')

  router.push('/profile')
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  // padding: 0 0.5rem;
  // box-sizing: border-box;

  .van-button{
margin-top: 0.4rem;
  }
}
</style>
