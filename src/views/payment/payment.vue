<template>
  <div class="payment">
    <h1 v-if="payStatus">支付成功~</h1>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useOrderStore } from '@/store/order'
import { addData } from '@/service'

const router = useRouter()

// pinia
const orderStore = useOrderStore()
orderStore.loadLocalData()
const order_number = computed(() => orderStore.order_number)

const route = useRoute()
const payStatus = ref(false)
const data = {
  out_trade_no: route.query.out_trade_no,
  trade_no: route.query.trade_no,
  order_number: order_number.value
}

addData('/payment-success', data).then(res => {
  // 支付后返回的数据
  if (res.data.code === 4) {
    payStatus.value = true

    router.push('/profile/order-list')
  }
})
</script>

<style scoped></style>
