<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="item in images" :key="item.id">
      <img :src="item.img_url" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IDetailSwiper } from '@/service/types'

defineProps({
  images: {
    type: Array as PropType<IDetailSwiper[]>,
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
