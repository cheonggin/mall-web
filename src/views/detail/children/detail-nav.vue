<template>
  <Navbar>
    <template #left>
      <div class="app-header-icon icon-back" @click="$router.back()">
        <img src="~@/assets/images/common/back.png" alt="" />
      </div>
    </template>
    <template #center>
      <div class="title">
        <span v-for="item in titleInfos" :key="item">
          {{ item }}
        </span>
      </div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

import Navbar from '@/components/common/navbar'
defineProps({
  titleInfos: Array as PropType<string[]>,
  default: () => []
})
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

  span {
    font-size: 0.36rem;
    margin: 0 0.22rem;
  }
}
</style>
