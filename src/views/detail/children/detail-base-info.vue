<template>
  <div class="product-info">
    <div class="goods-price"><span>￥</span>{{ data?.price }}</div>
    <div class="goods-name">{{ data?.name }}</div>

    <div class="sell-point">
      <div
        class="sell-point-desc"
        v-for="(item, index) in data?.sell_point_desc"
        :key="item"
      >
        <span :class="['img', `img${index + 1}`]"></span>
        <span class="desc">{{ item }}</span>
      </div>
    </div>

    <div class="classic-param">
      <div
        class="classic-param-item"
        v-for="val in data?.class_parameters"
        :key="val.value"
      >
        <img :src="val.icon" alt="" />
        <div class="classic-param-item-name">{{ val.name }}</div>
        <div class="classic-param-item-value">{{ val.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IGoodsInfoData } from '@/service/types'

defineProps({
  data: Object as PropType<IGoodsInfoData>,
  default: () => ({} as IGoodsInfoData)
})
</script>

<style lang="scss" scoped>
.product-info {
   margin-bottom: 0.4rem;
  .goods-price {
    position: relative;
    left: 0;
    color: #ff6700;
    font-size: 0.66rem;
    font-family: Avenir, Arial, sans-serif;
    font-weight: 700;
    padding-left: 0.4rem;
    padding-top: 0.3rem;

    span {
      position: absolute;
      top: 16px;
      left: 5px;
      font-size: 0.3rem;
    }
  }

  .goods-name {
    margin: 0 0.32rem;
    line-height: 1.5em;
    color: #000;
    font-weight: 700;
    font-size: 0.44rem;
    margin-top: 0.22rem;
    margin-bottom: 0.22rem;
    font-family: Avenir;
  }

  .sell-point {
    margin: 0 0.44rem;

    &-desc {
      text-align: left;
      color: #000;
      margin-bottom: 0.22rem;

      .img {
        position: relative;
        top: 0.04rem;
        display: inline-block;
        width: 0.34rem;
        height: 0.34rem;
        margin-right: 0.14rem;

        &.img1 {
          background: url('~@/assets/images/detail/img1.png') no-repeat;
          background-size: 100% auto;
        }
        &.img2 {
          background: url('~@/assets/images/detail/img2.png') no-repeat;
          background-size: 100% auto;
        }
        &.img3 {
          background: url('~@/assets/images/detail/img3.png') no-repeat;
          background-size: 100% auto;
        }
      }
    }
  }

  .classic-param {
    display: flex;
    padding: 0;
    text-align: center;
    color: #000;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    margin-top: 0.38rem;
    overflow-x: auto;
    overflow-y: hidden;

    &-item {
      min-width: 2.4rem;
      padding: 0.44rem 0.12rem;

      img {
        display: block;
        margin: 0 auto;
        width: 0.42rem;
        height: 0.42rem;
        margin-bottom: 0.05rem;
      }

      &-name {
        padding: 0.12rem 0;
      }

      &-value {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
