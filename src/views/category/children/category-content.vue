<template>
  <div class="category-wrapper ignore">
    <Scroll
      ref="scrollRef"
      class="category-content"
      eventPassthrough="horizontal"
      :probeType="3"
      @scroll="contentScroll"
    >
      <div class="component-list-main">
        <div
          ref="exposureRef"
          class="exposure"
          @click="$router.push(`/detail/${data?.category.path}`)"
        >
          <img :src="data?.category.img_url" alt="" />
        </div>

        <div class="nav">
          <div class="nav-list" ref="navListRef">
            <div
              v-for="(item, index) in data?.subCategory"
              :key="item.id"
              :class="['nav-item', { current: currentIndex === index }]"
              @click="toggle(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <template v-for="(item, index) in data?.subCategory" :key="item.id">
          <div :ref="el => setTitleRefs(index, el)" class="category-title">
            {{ item.name }}
          </div>
          <div class="category-group">
            <div class="box">
              <template v-for="value in item.category_products" :key="value.id">
                <div
                  class="product-row"
                  v-if="value.price"
                  @click="$router.push(`/detail/${value.path}`)"
                >
                  <img :src="value.img_url" alt="" />
                  <div class="right">
                    <div class="name">{{ value.name }}</div>
                    <div class="price">
                      {{ value.price }}
                      <span class="qi">起</span>
                      <div class="labels" v-if="value.labels?.length">
                        <span
                          class="label"
                          v-for="val in value.labels"
                          :key="val"
                        >
                          {{ val }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product" v-else @click="$router.push('/search')">
                  <div class="img">
                    <img :src="value.img_url" alt="" />
                  </div>
                  <div class="name">{{ value.name }}</div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, onUpdated, onBeforeUpdate, watch, reactive } from 'vue'
import { ICurrentCategory } from '@/store/category/types'
import Scroll from '@/components/common/scroll'

defineProps({
  data: Object as PropType<ICurrentCategory>
})
const currentIndex = ref(0)
const scrollRef = ref<InstanceType<typeof Scroll>>()
const exposureRef = ref<HTMLElement | null>(null)
const navListRef = ref<HTMLElement | null>(null)
let titleRefs = reactive<HTMLElement[]>([])
const offsetTop = ref(0)
const isFixed = ref(false)

onBeforeUpdate(() => {
  titleRefs = []
})

onUpdated(() => {
  currentIndex.value = 0
  offsetTop.value = exposureRef.value?.offsetHeight || 0
})

watch(
  () => currentIndex.value,
  newVal => {
    scrollRef.value?.scroll?.scrollToElement(
      titleRefs[newVal],
      500,
      0,
      -offsetTop.value
    )
  }
)

function toggle (index: number) {
  currentIndex.value = index
}

function setTitleRefs (index: number, el: any) {
  if (el) {
    titleRefs[index] = el
  }
}

function contentScroll (pos: any) {
  isFixed.value = -pos.y >= offsetTop.value
}
</script>

<style lang="scss" scoped>
.category-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;

  &.ignore {
    top: 50px;
    bottom: 49px;
  }

  .category-content {
    position: absolute;
    height: 100%;
    overflow: hidden;
    padding-left: 2.8rem;
    padding-right: 0.32rem;
  }
}

.exposure {
  img {
    width: 100%;
  }
}

.nav {
  position: absolute;
  width: 7rem;
  overflow-x: auto;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 0.34rem;
  padding-top: 0.34rem;
  background: #fff;

  &-list {
    white-space: nowrap;
    display: inline-block;
  }

  &-item {
    display: inline-block;
    margin-right: 0.46rem;
    color: #666;
    padding: 0.08rem 0.12rem;
    font-size: 0.33rem;

    &.current {
      background: #bdd4ce;
      color: #333;
      border-radius: 0.07rem;
    }
  }
}

.category-title {
  background-color: #fff;
  font-size: 0.4rem;
  text-align: left;
  font-weight: 700;
  margin-top: 0.3rem;
  height: 0.64rem;
  line-height: 0.64rem;
  color: #333;
}

.category-group {
  margin: -0.06rem 0 0;
  background-color: #fff;

  .box {
    .product-row {
      display: flex;
      width: 100%;
      background: #f8f8f8;
      border-radius: 0.1rem;
      margin-bottom: 0.16rem;

      img {
        width: 1.84rem;
      }

      .right {
        text-align: left;

        .name {
          font-size: 0.4rem;
          color: #333;
          margin-left: 0.09rem;
          margin-top: 0.29rem;
          white-space: nowrap;
        }

        .price {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 0.2rem;
          margin-left: 0.3rem;
          font-size: 0.38rem;

          &:before {
            content: '\A5';
            position: absolute;
            left: -8px;
            top: 0;
            font-size: 0.9em;
            text-decoration: none;
          }

          .qi {
            font-size: 0.18rem;
            position: relative;
            top: 0;
          }

          .labels {
            display: flex;
            flex-wrap: wrap;
            margin-left: 0.2rem;
            height: 0.37rem;

            .label {
              display: flex;
              align-items: center;
              flex-shrink: 0;

              color: #c69768;
              border: 1px solid #c69768;
              font-size: 0.2rem;
              margin-right: 0.15rem;
              margin-top: -0.06rem;
              padding: 0 0.09rem;
              border-radius: 0.04rem;
              height: 0.4rem;
            }
          }
        }
      }
    }

    .product {
      display: inline-flex;
      flex-direction: column;
      width: 33.3%;
      text-align: center;
      margin-top: 0.2rem;
      margin-bottom: 0.3rem;

      .img {
        width: 1.4rem;
        margin: 0 auto;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>
