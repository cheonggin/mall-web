<template>
  <div class="description-view">
    <div class="tab-header">
      <span
        v-for="(item, index) in list"
        :key="item.id"
        @click="toggle(index)"
        :class="{ on: currentIndex === index }"
      >
        {{ item.tab_name }}
      </span>
    </div>
    <div class="tab-view">
      <div
        class="tab-item"
        v-for="(item, index) in list"
        :key="item.id"
        v-show="currentIndex === index"
      >
        <div class="goods-tpl-data">
          <div
            class="section"
            v-for="value in item.page_info"
            :key="value.img_url"
          >
            <img :src="value.img_url" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import { IGoodsInfoTabList } from '@/service/types'

defineProps({
  list: Array as PropType<IGoodsInfoTabList[]>,
  default: () => []
})
const currentIndex = ref(0)

function toggle (index: number) {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.description-view {
  .tab-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.94rem;
    text-align: center;

    span {
      flex: 1 1 auto;
      display: block;
      font-size: 0.34rem;
      width: 100%;
      color: #000;

      &.on {
        color: #ff5934;
      }
    }
  }
}
</style>
