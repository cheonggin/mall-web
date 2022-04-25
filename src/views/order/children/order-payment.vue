<template>
  <ul class="payment">
    <li>
      <div>
        <a href="javascript:;" class="alipaywap">支付宝</a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.payment {
  border-bottom: 0.16rem solid #f5f5f5;

  li {
    border-bottom: 1px solid #eee;
    margin: 0 0.6rem;

    div {
      background-image: url('@/assets/images/cart/check_press.png');
      background-position: 100% 50%;
      background-repeat: no-repeat;
      background-size: 0.4rem 0.4rem;

      a {
        display: block;
        font-size: 0.36rem;
        line-height: 0.8rem;
        padding: 0.28rem 0 0.28rem 1rem;
        color: #333;

        &.alipaywap {
          background: url('@/assets/images/order/pay_zfb2.png') 0 50% no-repeat;
          background-size: 0.7rem 0.7rem;
        }
      }
    }
  }
}
</style>
