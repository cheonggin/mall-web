<template>
  <div class="profile-setting">
    <ProfileNav title="个人中心" />

    <div class="wrapper ignore">
      <van-uploader result-type="file" :after-read="handleUpload">
        <img v-if="fileUrl" :src="fileUrl" alt="" />
        <van-icon v-else name="plus" />
        <p>点击上传头像</p>
      </van-uploader>
    </div>

    <ProfileFooter title="退出账号" @after-click="logout" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import { useLoginStore } from '@/store/login/login'

import ProfileNav from './profile-nav.vue'
import ProfileFooter from './profile-footer.vue'
import { localCache } from '@/utils/cache'
import { IUserInfo } from '@/store/login/types'

const router = useRouter()
const loginStore = useLoginStore()
const fileUrl = computed(() => loginStore.avatarUrl)

async function handleUpload (file: any) {
  const formData = new FormData()
  formData.append('file', file.file)

  loginStore.uploadAvatarAction(formData)
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
  margin: 3rem auto;
  padding: 0 0.5rem;
  box-sizing: border-box;

  .van-uploader {
    width: 4rem;
    height: 4rem;
    border: 1px dashed #ccc;
    box-sizing: border-box;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);

    .van-icon {
      width: 4rem;
      height: 2rem;
      top: 50%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
