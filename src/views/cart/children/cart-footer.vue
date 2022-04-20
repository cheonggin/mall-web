<template>
  <div class="cart-footer">
    <div :class="['choose', { unchecked: isCheckedAll }]" @click="handleClick"></div>
    <div class="price-box">
      <div>共{{ count }}件 金额：</div>
      <div class="price">{{ price }}<span>元</span></div>
    </div>
    <div class="btn continue" @click="$router.push('/category')">
      继续购物
    </div>
    <div class="btn" @click="$router.push('/order')">去结算</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isCheckedAll: { type: Boolean, default: false },
  count: { type: Number, default: 0 },
  price: { type: Number, default: 0 }
})
const emits = defineEmits(['toggle'])

function handleClick () {
  emits('toggle')
}
</script>

<style lang="scss" scoped>
.cart-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 3px 14px 2px rgb(0 0 0 / 12%);
  z-index: 10000;
  display: flex;

  .choose {
    width: 1.4rem;
    height: 1.4rem;
    background: url('~@/assets/images/cart/check_normal.png') 50% 50% no-repeat;
    background-size: 0.6rem 0.6rem;
    padding: 0 0.28rem;

    &.unchecked {
      background: url('~@/assets/images/cart/check_press.png') 50% 50% no-repeat;

      background-size: 0.6rem 0.6rem;
    }
  }

  .price-box {
    width: 100%;
    font-size: 0.36rem;
    color: #999;
    text-align: center;
    padding-top: 0.2rem;

    .price {
      font-size: 0.6rem;
      color: #ff5722;
      margin-right: 0.2em;
      font-weight: bold;

      span {
        font-size: 0.36rem;
        color: #999;
      }
    }
  }

  .btn {
    width: 100%;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.4rem;
    background: #ff6700;
    color: #fff;
    text-align: center;

    &.continue {
      background: #f4f4f4;
      border: 1px solid #f4f4f4;
      color: #333;
      box-sizing: border-box;
    }
  }
}
</style>
