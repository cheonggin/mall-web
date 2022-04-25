<template>
  <div class="address-wrapper">
    <h3
      v-if="Object.keys(defaultAddress).length === 0"
      @click="$router.push('/profile/address')"
    >
      请选择收货地址
    </h3>

    <div
      v-else
      class="checkout-address"
      @click="
        $router.push({ path: '/profile/address', query: { type: 'order' } })
      "
    >
      <div class="user-info">
        <p>
          <span>{{ defaultAddress.name }} </span>
          <span>{{ defaultAddress.tel }}</span>
        </p>
      </div>
      <div class="user-address">
        <p>
          {{ defaultAddress.address }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { AddressListAddress } from 'vant'

defineProps({
  defaultAddress: {
    type: Object as PropType<AddressListAddress>,
    default: () => ({} as AddressListAddress)
  }
})
</script>

<style lang="scss" scoped>
.address-wrapper {
  position: relative;
  margin-top: 1.4rem;
  background: #fff url('@/assets/images/order/order-bg.png') 0 0 repeat-x;
  background-size: 0.7rem 0.12rem;
  padding: 0.36rem 0.56rem;
  border-bottom: 0.16rem solid #f5f5f5;

  h3 {
    font-size: 0.4rem;
  }

  .checkout-address:after {
    content: '';
    position: absolute;
    right: 0.32rem;
    top: 50%;
    width: 0.2rem;
    height: 0.2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0, -50%, 0) rotate(135deg);
    -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
  }

  .user-info {
    font-size: 0.4rem;
    font-weight: 700;
  }

  .user-address {
    font-size: 0.34rem;
    line-height: 0.4rem;
    color: #757575;
  }
}
</style>
