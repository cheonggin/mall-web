<template>
  <div class="home-recommend">
    <template v-for="item in list" :key="item.id">
      <div class="row">
        <a
          v-for="value in item.titleImgs"
          :key="value.img_url"
          :href="value.path"
        >
          <img :src="value.img_url" alt="" />
        </a>
      </div>
      <div class="col">
        <a
          class="goods-item"
          v-for="val in item.products"
          :key="val.id"
          @click="$router.push(`/detail/${val.path}`)"
        >
          <div class="img">
            <img :src="val.img_url" alt="" class="big" />
          </div>
          <div class="info">
            <div class="text">
              <div class="name">{{ val.product_name }}</div>
              <div class="brief">{{ val.product_brief }}</div>
              <div class="price"><span>￥</span>{{ val.show_price }}</div>
            </div>
          </div>
        </a>
      </div>
    </template>

    <img src="~@/assets/images/home/footer.jpg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IHomeRecommend } from '@/store/home/types'

defineProps({
  list: {
    type: Array as PropType<IHomeRecommend[]>,
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
.home-recommend {
  .row > a {
    display: block;

    img {
      width: 100%;
    }
  }

  .col {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .goods-item {
      display: block;
      width: 3rem;

      img {
        width: 100%;
      }

      .info {
        padding: 0.2rem 0.1rem;
        color: #000;
        text-align: center;

        .name {
          font-size: 0.24rem;
          font-weight: bolder;
          color: #3c3c3c;
          padding: 0 0.12rem;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .brief {
          font-size: 0.2rem;
          color: #3c3c3c;
          height: 1.5em;
          line-height: 1.6em;
          margin-top: 0.3em;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .price {
          color: rgb(245, 75, 75);
          font-size: 0.4rem;
          margin-top: 0.3em;
          font-weight: 700;
          font-family: Heiti SC, STHeiti;
          line-height: 1em;
          height: 1.2em;
          white-space: nowrap;

          > span {
            font-size: 0.2rem;
          }
        }
      }
    }
  }

  > img {
    width: 100%;
  }
}
</style>
