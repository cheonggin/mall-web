<template>
  <Navbar>
    <template #left>
      <div class="app-header-icon icon-back" @click="$router.back()">
        <img src="~@/assets/images/common/back.png" alt="" />
      </div>
    </template>
    <template #center>
      <div class="title">{{ title }}</div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from '@/components/common/navbar'

defineProps({ title: { type: String, defualt: '' } })
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
</style>
