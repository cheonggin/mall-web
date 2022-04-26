<template>
  <div class="page-order-list">
    <Navbar>
      <template #left>
        <div class="app-header-icon icon-back" @click="$router.back()">
          <img src="~@/assets/images/common/back.png" alt="" />
        </div>
      </template>
      <template #center>
        <div class="title">我的订单</div>
      </template>
    </Navbar>

    <Scroll class="order-list-content ignore">
      <ol class="order-list">
        <li class="order-item" v-for="item in orderList" :key="item.id">
          <div class="item-box-top">
            <div class="top-left">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1f03f361e857881963e47ea2c7270ef.png"
                alt=""
              />
              <strong>小米商城</strong>
            </div>
            <div class="top-right">
              {{ item.pay_status === 0 ? '未付款' : '已付款' }}
            </div>
          </div>

          <div
            class="item-box-center"
            v-for="value in item.goodsList"
            :key="value.id"
          >
            <img :src="value.product.image" alt="" />
            <div class="pro-info">
              <p class="pro-name">{{ value.product.name }}</p>
            </div>
            <div class="pro-right">
              <p class="pro-price">
                <span class="rmb">￥</span>{{ value.product.price }}
              </p>
              <p class="pro-num">x{{ value.count }}</p>
            </div>
          </div>

          <div class="item-box-bottom">
            <span class="create_at">{{ formatUtcString(item.create_at) }}</span>
            <span>共{{ total.count }}件商品</span>
            <span>实付金额：</span>
            <strong> <span class="rmb">￥</span>{{ total.price }} </strong>
          </div>
        </li>
      </ol>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import Navbar from '@/components/common/navbar'
import Scroll from '@/components/common/scroll'

import { useOrderStore } from '@/store/order'
import { formatUtcString } from '@/utils/format-time'

// pinia
const orderStore = useOrderStore()
orderStore.loadLocalData()
orderStore.getAllDataAction()
const orderList = computed(() => orderStore.orderList)
const total = computed(() => orderStore.total)
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

.order-list-content {
  position: absolute;
  left: 0;
  right: 0;

  &.ignore {
    bottom: 49px;
    top: 50px;
  }

  .order-item {
    font-size: 0.34rem;
    border-bottom: 0.28rem solid rgb(245, 245, 245);

    .item-box-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ececec;
      padding: 0.24rem 0.38rem;

      .top-left {
        display: flex;
        align-items: center;

        img {
          width: 0.6rem;
          margin-right: 0.12rem;
        }

        strong {
          font-weight: 400;
        }
      }

      .top-right {
        color: #ff5722;
        font-size: 0.36rem;
      }
    }

    .item-box-center {
      display: flex;
      align-items: center;
      padding: 0.28rem 0.38rem;

      img {
        width: 1.6rem;
      }

      .pro-info {
        width: 5.6rem;

        .pro-name {
          width: 100%;
          font-size: 0.38rem;
        }
      }

      .pro-right {
        width: 2.8rem;
        text-align: right;
        color: rgba(0, 0, 0, 0.5);

        .pro-price {
          font-size: 0.38rem;
        }
      }

      p {
        line-height: 1.8em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .item-box-bottom {
      padding: 0.28rem 0.38rem;
      text-align: right;
      border-top: 1px solid #ececec;
      font-size: 0.34rem;

      .create_at {
        float: left;
        font-size: 0.26rem;
        color: #919191;
        margin-top: 0.08rem;
      }

      span {
        margin-left: 0.28rem;
      }
      strong {
        font-size: 0.4rem;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
      }
    }
  }
}
</style>
