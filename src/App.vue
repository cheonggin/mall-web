<template>
  <router-view></router-view>
  <MainTabbar v-if="$route.meta.isShowTabbar" />
</template>

<script setup lang="ts">
import MainTabbar from '@/components/content/main-tabbar'
</script>
