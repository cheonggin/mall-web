<template>
  <div id="search-list">
    <SearchNav v-model="query" @search="handleSearch" />
    <Scroll
      ref="scrollRef"
      class="search-list-content ignore"
      @pulling-up="loadMore"
    >
      <searchListContent :list="goodsList" />
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Scroll from '@/components/common/scroll'
import SearchNav from './children/search-nav.vue'
import searchListContent from './children/search-list-content.vue'

import { getProductList } from '@/service'

const route = useRoute()
const router = useRouter()
const goodsList = ref([])
const queryInfo = reactive({
  offset: 0,
  limit: 20
})
const query = ref<string>(route.query.query as string)
const scrollRef = ref<InstanceType<typeof Scroll>>()
const isMore = ref(true) // 控制是否执行上拉加载

onUnmounted(() => {
  goodsList.value = []
})

function handleSearch () {
  router.push({ path: '/search/list', query: { query: query.value } })
  goodsList.value = []
  isMore.value = true
  getData(query.value)
}

async function getData (query:string) {
  if (isMore.value) {
    const { data } = await getProductList({ ...queryInfo, query })
    goodsList.value = goodsList.value.concat(data.rows)

    // 如果goodsList的总长度大于返回数据的总条数，则全部数据已加载完毕
    if (goodsList.value.length >= data.count) {
      isMore.value = false
    }
  }
}
getData(query.value)

function loadMore () {
  queryInfo.offset += 1

  getData(query.value)

  scrollRef.value?.scroll?.finishPullUp()
}
</script>

<style lang="scss" scoped>
.search-list-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  &.ignore {
    top: 50px;
  }
}
</style>
