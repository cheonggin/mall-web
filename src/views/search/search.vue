<template>
  <div id="search">
    <SearchNav v-model="query"  @search="$router.push(`/search/list?query=${query}`)" />
    <SearchContent :list="keywordList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchNav from './children/search-nav.vue'
import SearchContent from './children/search-content.vue'

import { getKeywordList } from '@/service'

const keywordList = ref([])
const query = ref('')

getKeywordList().then(res => {
  keywordList.value = res.data
})
</script>

<style lang="scss" scoped></style>
