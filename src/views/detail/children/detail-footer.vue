<template>
  <van-action-bar>
    <div class="footer-btn" @click="$router.push('/home')">
      <i class="img-icon icon-home"></i>
      <span>首页</span>
    </div>
    <div class="footer-btn">
      <i class="img-icon icon-service"></i>
      <span>客服</span>
    </div>
    <div class="footer-btn" @click="$router.push('/cart')">
      <i class="img-icon icon-cart"></i>
      <span>购物车</span>
      <em class="bubble" v-if="total > 0">{{ total }}</em>
    </div>

    <van-action-bar-button
      type="warning"
      text="加入购物车"
      @click="handleAddCick"
    />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script setup lang="ts">
defineProps({ total: { type: Number, default: 0 } })
const emits = defineEmits(['add'])

function handleAddCick () {
  emits('add')
}
</script>

<style lang="scss" scoped>
.footer-btn {
  position: relative;
  display: block;
  text-decoration: none;
  width: auto;
  padding: 0 0.1rem;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;

  &:first-child {
    padding-left: 0.28rem;
  }

  .img-icon {
    display: block;
    width: 0.88rem;
    height: 0.88rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;

    &.icon-home {
      background-image: url('@/assets/images/detail/icon-home.png');
    }

    &.icon-service {
      background-image: url('@/assets/images/detail/icon-service.png');
    }

    &.icon-cart {
      background-image: url('@/assets/images/detail/icon-cart.png');
    }
  }

  .bubble {
    position: absolute;
    top: 0.12rem;
    left: 50%;
    width: 0.44rem;
    line-height: 0.44rem;
    height: 0.44rem;
    color: #fff;
    background: linear-gradient(45deg, #ff7d00, #ff5934);
    font-size: 0.18rem;
    font-style: normal;
    border-radius: 0.44rem;
    box-sizing: border-box;
    transform: translate3d(0.1rem, -20%, 0);
  }
}
</style>
