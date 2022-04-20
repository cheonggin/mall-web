<template>
  <router-view></router-view>
  <MainTabbar v-if="$route.meta.isShowTabbar" />
</template>

<script setup lang="ts">
import MainTabbar from '@/components/content/main-tabbar'

import { useLoginStore } from '@/store/login/login'

// pinia -> login
const loginStore = useLoginStore()
loginStore.loadLocalLogin()
</script>
