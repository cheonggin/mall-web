<template>
  <div id="order">
    <Navbar>
      <template #left>
        <div class="app-header-icon icon-back" @click="$router.back()">
          <img src="~@/assets/images/common/back.png" alt="" />
        </div>
      </template>
      <template #center>
        <div class="title">用户结算</div>
      </template>
    </Navbar>

    <OrderAddress :default-address="address" />
    <OrderPayment />
    <OrderGoods :list="list" />
    <OrderFooter
      :total-count="checkedTotal.count"
      :total-price="checkedTotal.price"
      @handle-pay="handlePayClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import OrderAddress from './children/order-address.vue'
import OrderPayment from './children/order-payment.vue'
import OrderGoods from './children/order-goods.vue'
import OrderFooter from './children/order-footer.vue'

import { useAddressStore } from '@/store/address'
import { useCartStore } from '@/store/cart'
import { useOrderStore } from '@/store/order'
import { addData } from '@/service'

const route = useRoute()

// pinia
const addressStore = useAddressStore()
const cartStore = useCartStore()
const orderStore = useOrderStore()
addressStore.getDataAction()
addressStore.loadLocalData()
cartStore.getDataAction()
orderStore.loadLocalData()
const selectAddress = computed(() => addressStore.selectAddress)
const defaultAddress = computed(() => addressStore.defualtAddress)
const selectedList = computed(() => cartStore.selectedList)
const orderGoodsList = computed(() => orderStore.orderGoodsList)

const address = selectAddress.value.name ? selectAddress : defaultAddress
const isDetailJump = ref((route.query.type as string) === 'detail') // 记录是否从产品详情页跳转到order页面
const list = isDetailJump.value ? orderGoodsList : selectedList // 若是从产品详情页跳转到order页面则传递给OrderGoods组件的数据为orderGoodsList，否则为购物车中checked为true的数据
// 计算当前订单数据的总count与price
const checkedTotal = computed(() => {
  const data = {
    count: 0,
    price: 0
  }

  list.value.forEach(item => {
    data.count += item.count
    data.price += item.count * parseInt(item.product.price)
  })

  return data
})

// 处理去付款
async function handlePayClick () {
  const data = list.value.map(item => {
    return {
      count: item.count,
      product_id: item.product.id
    }
  })

  // 生成订单
  await orderStore.addDataAction({
    address_id: address.value?.id as number,
    list: data
  })

  // 若是从购物车页面跳转到order页面，则删除购物车中选中的数据
  const nameArr:string[] = [] // 记录购买产品的名称

  if (!isDetailJump.value) {
    const arr: number[] = []

    selectedList.value.forEach(item => {
      nameArr.push(item.product.name)
      arr.push(item.product_id)
    })
    const ids = arr.join()
    cartStore.deleteDataAction(ids)
  } else {
    nameArr.push(list.value[0].product.name)
  }

  // 发起支付请求
  const price = checkedTotal.value.price
  const order_number = computed(() => orderStore.order_number)
  const name = nameArr.join()
  const result = await addData('/payment', { order_number: order_number.value, price, name })

  if (result.code === 0) {
    // 打开支付页面
    window.location.href = result.data.paymentUrl
  }
}
</script>

<style lang="scss" scoped>
.app-header-icon {
  width: 1.2rem;

  img {
    width: 0.7rem;
  }
}

.title {
  width: 80%;
  text-align: center;
  font-size: 0.4rem;
}
</style>
