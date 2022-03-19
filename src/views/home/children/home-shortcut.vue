<template>
  <div class="home-shortcut">
    <a class="shortcut-item" v-for="item in list" :key="item.id" :href="item.path">
      <img :src="item.img_url" alt="" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type{ IHomeSwipe } from '@/store/home/types'

defineProps({
  list: { type: Array as PropType<IHomeSwipe[]>, default: () => [], required: true }
})
</script>

<style lang="scss" scoped>
.home-shortcut {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  .shortcut-item {
    display: block;
    width: 2rem;
    height: 2rem;

    img{
      width: 100%;
    }
  }
}
</style>
