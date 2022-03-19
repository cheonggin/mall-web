import { defineStore } from 'pinia'

import { getHomeData } from '@/service'
import { IHomeState, IHomeSwipe, IHomeRecommend } from './types'

const useHomeStore = defineStore('home', {
  state: (): IHomeState => {
    return {
      bannerList: [],
      shortcutList: [],
      recommendList: []
    }
  },
  actions: {
    async getHomeDataAction () {
      const {
        data: { bannerList, shortcutList, recommendList }
      } = await getHomeData()

      this.bannerList = bannerList as IHomeSwipe[]
      this.shortcutList = shortcutList as IHomeSwipe[]
      this.recommendList = recommendList as IHomeRecommend[]
    }
  }
})

export default useHomeStore
