<template>
  <div id="category">
    <CategoryNav />
    <CategorySidebar :list="categoryList" @select="selectItem" />
    <CategoryContent :data="currentSubList" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import CategoryNav from './children/category-nav.vue'
import CategorySidebar from './children/category-sidebar.vue'
import CategoryContent from './children/category-content.vue'

import useCategoryStore from '@/store/category'

const categoryStore = useCategoryStore()
categoryStore.getCategoryListAction()

const categoryList = computed(() => categoryStore.categoryList)
const currentSubList = computed(() => categoryStore.currentSubList)

function selectItem (id: number) {
  categoryStore.getSubCategoryListAction(id)
}
</script>

<style lang="scss" scoped></style>
