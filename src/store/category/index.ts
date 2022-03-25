import { defineStore } from 'pinia'

import { getCategoryList, getSubCategoryList } from '@/service'

import { ICategory, ICategoryState, ICurrentCategory } from './types'

const useCategoryStore = defineStore('category', {
  state: (): ICategoryState => {
    return {
      categoryList: [],
      currentSubList: {
        category: {
          name: '',
          path: '',
          create_at: '',
          update_at: '',
          id: 0,
          img_url: ''
        },
        subCategory: []
      }
    }
  },
  actions: {
    async getCategoryListAction () {
      const result = await getCategoryList()
      this.categoryList = result.data as ICategory[]

      this.getSubCategoryListAction(1)
    },

    async getSubCategoryListAction (id: number) {
      const result = await getSubCategoryList(id)
      this.currentSubList = result.data as ICurrentCategory
    }
  }
})

export default useCategoryStore
