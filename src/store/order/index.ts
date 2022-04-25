import { addData } from '@/service'
import { sessionCache } from '@/utils/cache'
import { defineStore } from 'pinia'

import { OrderState, CreateOrderDto } from './types'

const useOrderStore = defineStore('order', {
  state: (): OrderState => {
    return {
      orderGoodsList: [],
      order_number: ''
    }
  },

  actions: {
    loadLocalData () {
      const product = sessionCache.getCache('product')
      const order_number = sessionCache.getCache('order_number')

      this.orderGoodsList = product
      this.order_number = order_number
    },

    async addDataAction (payload: CreateOrderDto) {
      const { data } = await addData('/page/order', payload)

      this.order_number = data.order_number
      sessionCache.setCache('order_number', this.order_number)
    }
  }
})

export { useOrderStore }
