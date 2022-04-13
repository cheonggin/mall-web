<template>
  <van-action-bar>
    <div class="footer-btn" v-for="item in data" :key="item.className">
      <i :class="['img-icon', item.className]"></i>
      <span>{{ item.text }}</span>
    </div>

    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买"/>
  </van-action-bar>
</template>

<script setup lang="ts">
const data = [
  { className: 'icon-home', text: '首页' },
  { className: 'icon-service', text: '客服' },
  { className: 'icon-cart', text: '购物车' }
]
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
}
</style>
