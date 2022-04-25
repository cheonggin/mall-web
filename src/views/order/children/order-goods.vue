<template>
  <div class="order-goods">
    <div class="goods-info" v-for="item in list" :key="item.product.id">
      <div class="img"><img :src="item.product.image" alt="" /></div>
      <div class="name">{{ item.product.name }}</div>
      <div class="price">
        <span>{{ item.count }} x </span>
        <strong>{{ item.product.price }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IOrderGoods } from '@/store/order/types'

defineProps({
  list: { type: Array as PropType<IOrderGoods[]>, default: () => [] }
})
</script>

<style lang="scss" scoped>
.order-goods {
  border-bottom: 0.16rem solid #f5f5f5;
  .goods-info {
    display: flex;
    align-items: center;
    font-size: 0.34rem;
    line-height: 0.4rem;
    padding: 0.2rem 0;
    margin: 0.6rem;
    border-bottom: 1px solid #eee;

    .img {
      width: 1.2rem;
      height: 1.2rem;

      img {
        width: 100%;
      }
    }

    .name {
      flex: 1;
      margin-right: 0.14rem;
    }

    .price {
      color: #333;
    }
  }
}
</style>
