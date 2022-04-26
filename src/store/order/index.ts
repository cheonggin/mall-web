import { addData, getData } from '@/service'
import { sessionCache } from '@/utils/cache'
import { defineStore } from 'pinia'

import { OrderState, CreateOrderDto } from './types'

const useOrderStore = defineStore('order', {
  state: (): OrderState => {
    return {
      orderGoodsList: [],
      order_number: '',
      orderList: []
    }
  },

  getters: {
    total: state => {
      const tmp = {
        count: 0,
        price: 0
      }
      state.orderList.forEach(item => {
        item.goodsList.forEach(value => {
          tmp.count += value.count
          tmp.price += (value.count * parseInt(value.product.price))
        })
      })

      return tmp
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
    },

    async getAllDataAction () {
      const { data } = await getData('/page/order')

      this.orderList = data
    }
  }
})

export { useOrderStore }
