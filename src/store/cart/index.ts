import { defineStore } from 'pinia'
import { Toast } from 'vant'
import { addData, deleteData, getData, updateData } from '@/service'
import { CartState, CreateCartDto, UpdateCartDto } from './types'

const useCartStore = defineStore('cart', {
  state: (): CartState => {
    return {
      cartList: []
    }
  },
  getters: {
    // 购物车商品中所有的count总和
    total: state => {
      let count = 0
      state.cartList.forEach(item => (count += item.count))

      return count
    },

    checkedTotal: state => {
      const total = {
        count: 0, // 购物车列表中所有checke为true的商品个数总和
        price: 0 // 购物车列表中所有checke为true的商品总价格
      }
      state.cartList.forEach(item => {
        if (item.checked) {
          total.count += item.count
          total.price += item.count * parseInt(item.product.price)
        }
      })

      return total
    },

    isCheckedAll: state => {
      const val = state.cartList.find(item => item.checked === false)

      return !val
    },

    // 当前购物车列表中选中的商品
    selectedList: state => {
      const list = state.cartList.filter(item => item.checked)

      return list
    }
  },
  actions: {
    async addDataAction (createCartDto: CreateCartDto) {
      const { code } = await addData('/page/cart', createCartDto)

      if (code === 0) {
        // 添加成功后重新获取购物车数据
        this.getDataAction()
        Toast.success('已添加至购物车~')
      }
    },

    async getDataAction () {
      const { data } = await getData('/page/cart')

      this.cartList = data
    },

    async updateDataAction (product_id: number, updateCartDto: UpdateCartDto) {
      await updateData(`/page/cart/${product_id}`, updateCartDto)
    },

    async deleteDataAction (product_ids: string) {
      await deleteData(`/page/cart/${product_ids}`)

      // 删除成功后重新请求购物车数据
      this.getDataAction()
    }
  }
})

export { useCartStore }
