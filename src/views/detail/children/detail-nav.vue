<template>
  <Navbar>
    <template #left>
      <div class="app-header-icon icon-back" @click="$router.back()">
        <img src="~@/assets/images/common/back.png" alt="" />
      </div>
    </template>
    <template #center>
      <div class="title">
        <span
          v-for="(item, index) in titleInfos"
          :key="item"
          @click="onClick(index)"
          :class="{ current: currentIndex === index }"
        >
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
  titleInfos: { type: Array as PropType<string[]>, default: () => ['商品', '评价', '详情'] },
  currentIndex: { type: Number, default: 0 }
})
const emits = defineEmits(['titleClick'])

function onClick (index: number) {
  emits('titleClick', index)
}
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

    &.current {
      color: #ff5934;
      border-bottom: 0.07rem solid #ff5934;
    }
  }
}
</style>
