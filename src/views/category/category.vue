<template>
  <div id="category">
    <CategoryNav />
    <CategorySidebar :list="categoryList" @select="selectItem" />
    <CategoryContent :data="currentSubList" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import CategoryNav from './children/category-nav.vue'
import CategorySidebar from './children/category-sidebar.vue'
import CategoryContent from './children/category-content.vue'

import { getCategoryList, getSubCategoryList } from '@/service'
import { ICurrentCategory, ICategory } from '@/service/types'

const categoryList = ref<ICategory[]>([])
const currentSubList = reactive<ICurrentCategory>({
  category: {} as ICategory,
  subCategory: []
})

async function initData () {
  const { data } = await getCategoryList()
  categoryList.value = data

  getSubCategoryListAction(1)
}
initData()

async function getSubCategoryListAction (id:number) {
  const { data } = await getSubCategoryList(id)
  currentSubList.category = data.category
  currentSubList.subCategory = data.subCategory
}

function selectItem (id: number) {
  getSubCategoryListAction(id)
}
</script>

<style lang="scss" scoped></style>
