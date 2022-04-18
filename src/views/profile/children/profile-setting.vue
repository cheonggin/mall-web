<template>
  <div class="profile-setting">
    <Navbar>
      <template #left>
        <div class="app-header-icon icon-back" @click="$router.back()">
          <img src="~@/assets/images/common/back.png" alt="" />
        </div>
      </template>
      <template #center>
        <div class="title">个人中心</div>
      </template>
    </Navbar>

    <div class="wrapper ignore">
      <van-uploader result-type="file" :after-read="handleUpload">
        <img v-if="fileUrl" :src="fileUrl" alt="" />
        <van-icon v-else name="plus" />
        <p>点击上传头像</p>
      </van-uploader>
    </div>

    <footer @click="logout">
      <a href="javascript:;">退出账号</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import { useLoginStore } from '@/store/login/login'

import Navbar from '@/components/common/navbar'
import { localCache } from '@/utils/cache'
import { IUserInfo } from '@/store/login/types'

const router = useRouter()
const loginStore = useLoginStore()
const fileUrl = computed(() => loginStore.avatarUrl)

loginStore.loadLocalLogin()
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
.app-header-icon {
  width: 1.2rem;

  img {
    width: 0.7rem;
  }
}

.title {
  width: 80%;
  text-align: center;
  font-size: 0.4rem;
}

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

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background-color: #f4f4f4;
  height: 1.4rem;
  text-align: center;
  line-height: 1.4rem;

  a {
    font-size: 0.4rem;
    display: block;
    width: 100%;
    height: 100%;
    color: #3c3c3c;
  }
}
</style>
