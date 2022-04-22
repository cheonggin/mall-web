import { sessionCache } from '@/utils/cache'
import { defineStore } from 'pinia'

import { OrderState } from './types'

const useOrderStore = defineStore('order', {
  state: ():OrderState => {
    return {
      orderGoodsList: []
    }
  },

  actions: {
    loadLocalData () {
      const product = sessionCache.getCache('product')

      this.orderGoodsList = product
    }
  }
})

export { useOrderStore }
