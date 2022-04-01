<template>
  <div class="goods-list">
    <div
      class="goods-item"
      v-for="item in list"
      :key="item.id"
      @click="$router.push(`/detail/${item.product_id}`)"
    >
      <img :src="item.image" alt="" class="item-img" />
      <div class="item-con">
        <h3>{{ item.name }}</h3>
        <p class="item-desc" v-html="item.desc"></p>
        <div class="item-specs-list" v-if="item.class_parameters.length > 0">
          <div
            class="specs-item"
            v-for="(value, index) in item.class_parameters"
            :key="index"
          >
            <span class="name">{{ value.name }}</span>
            <span class="desc">{{ value.bottom_title }}</span>
          </div>
        </div>
        <div class="item-price">
          <sub>￥</sub>
          {{ item.price }}
          <span class="spe">起</span>
          <span class="icon-box" v-if="item.activity_label.length > 0">
            <template v-for="val in item.activity_label" :key="val.type">
              <img :src="val.img_url" alt="" />
            </template>
          </span>
        </div>
        <div class="item-count">
          <span class="comments">{{ item.comments_total }}条评价</span>
          <span class="satisfy">{{ item.satisfy_per }}满意</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IGoodsList } from '@/service/types'

defineProps({
  list: { type: Array as PropType<IGoodsList[]> },
  default: () => []
})
</script>

<style lang="scss" scoped>
.goods-item {
  display: flex;
  .item-img {
    width: 3.5rem;
  }

  .item-con {
    width: 5.7rem;
    margin-left: 0.32rem;

    h3 {
      font-size: 0.38rem;
      color: rgba(0, 0, 0, 0.87);
      line-height: 0.52rem;
      font-weight: 400;
    }

    .item-desc {
      font-size: 0.28rem;
      line-height: 0.4rem;
      color: rgba(0, 0, 0, 0.54);
      margin-top: 0.05rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .item-specs-list {
      display: flex;
      align-items: center;
      margin: 0.3rem 0 0;

      .specs-item {
        flex: 1;

        span {
          display: block;
          text-align: center;
        }

        .name {
          color: #4a4a4a;
          font-size: 0.3rem;
          line-height: 0.44rem;
        }

        .desc {
          color: rgba(0, 0, 0, 0.54);
          font-size: 0.28rem;
          line-height: 0.4rem;
          height: 0.4rem;
          overflow: hidden;
        }
      }
    }
  }

  .item-price {
    display: flex;
    color: #ff6700;
    font-size: 0.5rem;
    line-height: 1;
    margin-top: 0.3rem;

    sub {
      position: relative;
      line-height: 0;
      font-size: 0.34rem;
      top: 0.8em;
      margin-right: 0.06rem;
    }

    span {
      font-size: 0.4rem;
      line-height: 0.5rem;
    }

    .spe {
      font-size: 0.4rem;
      display: inline-block;
      line-height: 0.5rem;
    }

    .icon-box {
      display: inline-block;
      flex: 1;
      vertical-align: bottom;
      margin-top: -0.03rem;

      img {
        display: inline-block;
        width: 1.2rem;
        height: 0.35rem;
        margin-left: 0.14rem;
        vertical-align: middle;
        margin-top: -2px;
        object-fit: contain;
        line-height: 1;
        vertical-align: bottom;
      }
    }
  }

  .item-count {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.28rem;
    line-height: 0.34rem;
    margin-top: 0.14rem;

    .comments{
      margin-right: 0.14rem;
    }
  }
}
</style>
