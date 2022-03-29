<template>
  <div class="search-content ignore">
    <div class="title">搜索发现</div>
    <div class="discovery">
      <div
        class="discovery-item"
        v-for="item in list"
        :key="item.id"
        @click="
          $router.push({ path: '/search/list', query: { query: item.keyword } })
        "
      >
        {{ item.keyword }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IKeywordList } from '@/service/types'

defineProps({
  list: { type: Array as PropType<IKeywordList[]> },
  default: () => []
})
</script>

<style lang="scss" scoped>
.search-content {
  position: absolute;
  left: 0;
  right: 0;
  padding: 0.4rem 0.32rem;
  text-align: left;

  &.ignore {
    top: 50px;
  }

  .title {
    font-size: 0.4rem;
    line-height: 0.4rem;
    font-weight: 700;
    margin-top: 0.6rem;
    margin-bottom: 0.4rem;
  }

  .discovery {
    padding-left: 0.24rem;

    &-item {
      display: inline-flex;
      align-items: center;
      width: 50%;
      margin-bottom: 0.4rem;
      font-size: 0.3rem;
    }
  }
}
</style>
