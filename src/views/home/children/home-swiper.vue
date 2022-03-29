<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="item in images" :key="item.path">
      <a :href="item.path">
        <img :src="item.img_url" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { IHomeSwipe } from '@/service/types'

defineProps({
  images: {
    type: Array as PropType<IHomeSwipe[]>,
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
img{
  width: 100%;
}
</style>
