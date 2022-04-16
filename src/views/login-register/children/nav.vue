<template>
  <Navbar class="login-nav">
    <template #left>
      <div class="app-header-icon icon-back" @click="$router.back()">
        <img src="~@/assets/images/common/back.png" alt="" />
      </div>
    </template>
    <template #center>
      <div class="title ignore">{{ title }}</div>
    </template>
  </Navbar>
</template>

<script lang="ts" setup>
import Navbar from '@/components/common/navbar'

defineProps({
  title: { type: String, default: '登录' }
})
</script>

<style lang="scss" scoped>
.app-header-icon {
  width: 1.2rem;

  img {
    width: 0.7rem;
    height: 0.7rem;
  }
}
.title {
  width: 100%;
  height: 100%;
  font-weight: 700;
  margin-left: -0.8rem;
  font-size: 0.4rem;

  &.ignore {
    line-height: 50px;
  }
}
</style>
