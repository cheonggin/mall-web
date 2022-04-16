<template>
  <div id="login">
    <Nav />
    <Content @toggle="$router.push('/register')" @submit="signIn" />
  </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '@/store/login/login'

import Nav from './children/nav.vue'
import Content from './children/content.vue'
import { LoginDto } from '@/store/login/types'

const loginStore = useLoginStore()

async function signIn (loginDto:LoginDto) {
  await loginStore.loginAction(loginDto)
}
</script>

<style scoped></style>
