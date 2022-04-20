<template>
  <div id="profile">
    <header>
      <div class="user">
        <div class="img">
          <img v-if="loginState" :src="userInfo.avatar_url" alt="" />
          <img v-else src="~@/assets/images/profile/avatar.png" alt="" />
        </div>
        <div class="name" v-if="loginState">
          {{ userInfo.name }}
        </div>
        <div class="name" @click="$router.push('/login')" v-else>登录/注册</div>
      </div>
    </header>
    <div class="line"></div>
    <ul class="items" v-if="loginState">
      <li>
        <i class="iconfont icon-order"></i>
        <cite>我的订单</cite>
      </li>
      <li @click="$router.push('/profile/address')">
        <i class="iconfont icon-address"></i>
        <cite>地址管理</cite>
      </li>
      <li @click="$router.push('/profile/setting')">
        <i class="iconfont icon-setting"></i>
        <cite>设置</cite>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useLoginStore } from '@/store/login/login'

// pinia
const loginStore = useLoginStore()
const loginState = computed(() => loginStore.loginState)
const userInfo = computed(() => loginStore.userInfo)
</script>

<style lang="scss" scoped>
header {
  background: url('@/assets/images/profile/profile-bg.png') center 0 #f37d0f;
  padding: 0.44rem 0;
  box-sizing: border-box;

  .user {
    display: flex;
    align-items: center;
    height: 100%;

    .img {
      margin: 0 0.22rem 0 0.44rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      border: 3px solid hsla(0, 0%, 100%, 0.4);
      box-sizing: border-box;

      img {
        height: 100%;
        border-radius: 50%;
      }
    }

    .name {
      color: #fff;
      font-size: 0.4rem;
      text-align: left;
    }
  }
}

.line {
  width: 100%;
  height: 0.22rem;
  border-bottom: 0.22rem solid #f5f5f5;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

li {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  height: 1.44rem;
  padding-right: 0.8rem;

  .iconfont {
    display: block;
    width: 1.6rem;
    text-align: center;
    font-size: 0.48rem;
    color: rgba(0, 0, 0, 0.87);
  }

  cite {
    font-size: 0.38rem;
    font-style: normal;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
