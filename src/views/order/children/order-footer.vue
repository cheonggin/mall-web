<template>
  <footer class="order-footer ignore">
    <div class="price-box">
      <span>共{{ totalCount }}件 合计：</span>
      <strong class="price">￥{{ totalPrice }}</strong>
    </div>
    <a href="javascript:;" class="btn" @click="handleClick">去付款</a>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  totalCount: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 }
})
const emits = defineEmits(['handlePay'])

function handleClick () {
  emits('handlePay')
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: #fff;
  display: flex;

  &.ignore {
    height: 52px;
    line-height: 52px;
    font-size: 0.4rem;
  }

  .price-box {
    color: #ff4d14;
    width: 100%;
    text-align: center;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #ff5722;
    background-color: #ff5722;
    color: #fff;
    text-align: center;
  }
}
</style>
