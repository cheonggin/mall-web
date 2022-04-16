<template>
  <div id="register">
    <Nav title="注册" />
<Content title="注册" @toggle="$router.push('/login')" @submit="signUp" />
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import 'vant/es/button/style/index'

import Nav from './children/nav.vue'
import Content from './children/content.vue'

import { register } from '@/service'
import { LoginDto } from '@/store/login/types'

const router = useRouter()

async function signUp (user: LoginDto) {
  const result = await register(user)

  if (result.code === 0) {
    Toast.success('注册成功，请登录')
    router.push('/login')
  }
}
</script>

<style scoped></style>
