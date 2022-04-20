<template>
  <div id="detail">
    <DetailNav
      @title-click="onTitleClick"
      :current-index="currentIndex"
    />
    <Scroll
      ref="scrollRef"
      class="detail-content ignore"
      :probe-type="3"
      @scroll="onScroll"
    >
      <div>
        <DetailSwiper ref="swiperRef" :images="bannerList" />
        <DetailBaseInfo :data="goodsInfoData" />
        <DetailComment ref="commentRef" :data="commentsData" />
        <DetailInfoTab ref="tabRef" :list="tabList" />
      </div>
    </Scroll>
    <DetailFooter @add="addToCart" :total="total" />
    <BackTop v-show="isShowBackTop" @click="backToTop" />
  </div>
</template>

<script setup lang="ts">
import { computed, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'

import Scroll from '@/components/common/scroll'
import BackTop from '@/components/content/back-top'

import DetailNav from './children/detail-nav.vue'
import DetailSwiper from './children/detail-swiper.vue'
import DetailBaseInfo from './children/detail-base-info.vue'
import DetailComment from './children/detail-comment.vue'
import DetailInfoTab from './children/detail-info-tab.vue'
import DetailFooter from './children/detail-footer.vue'

import { getGoodsInfo } from '@/service'
import {
  IGoodsInfoData,
  IGoodsInfoComments,
  IGoodsInfoTabList,
  IDetailSwiper
} from '@/service/types'
import { useCartStore } from '@/store/cart'

// pinia
const cartStore = useCartStore()
const total = computed(() => cartStore.total) // 购物车列表中所有产品的个数总和

const route = useRoute()
const product_id = ref(parseInt(route.params.id as string))
const bannerList = ref<IDetailSwiper[]>()
const goodsInfoData = ref<IGoodsInfoData>({} as IGoodsInfoData)
const commentsData = ref<IGoodsInfoComments>({} as IGoodsInfoComments)
const tabList = ref<IGoodsInfoTabList[]>([])
const currentIndex = ref(0)
const isShowBackTop = ref(false)
const scrollRef = ref<InstanceType<typeof Scroll>>()
const swiperRef = ref<InstanceType<typeof DetailSwiper>>()
const commentRef = ref<InstanceType<typeof DetailComment>>()
const tabRef = ref<InstanceType<typeof DetailInfoTab>>()
const themeTops = ref<number[]>([]) // 记录商品、评价、详情的OffsetTop距离

onUpdated(() => {
  _getOffsetTop()
})

async function initData (id: number) {
  const { data } = await getGoodsInfo(id)

  bannerList.value = data.bannerList
  goodsInfoData.value = data.detail
  commentsData.value = data.comment
  tabList.value = data.tabs
}
initData(product_id.value)

function onTitleClick (index: number) {
  currentIndex.value = index
  scrollRef.value?.scroll?.scrollTo(0, -themeTops.value[index], 500)
}

function onScroll (pos: { x: number; y: number }) {
  isShowBackTop.value = -pos.y > 500

  // 滚动时动态修改currentIndex
  _listenScrollTheme(-pos.y)
}

// 添加到购物车
function addToCart () {
  cartStore.addDataAction({ count: 1, product_id: product_id.value })
}

// 点击回到顶部
function backToTop () {
  scrollRef.value?.scroll?.scrollTo(0, 0, 500)
}

function _getOffsetTop () {
  themeTops.value = []
  themeTops.value.push(swiperRef.value?.$el.offsetTop)
  themeTops.value.push(commentRef.value?.$el.offsetTop)
  themeTops.value.push(tabRef.value?.$el.offsetTop)
  themeTops.value.push(Number.MAX_VALUE) // 引入Number.MAX_VALUE是为了在_listenScrollTheme方法中用于和最后一个主题的top进行比较
}

function _listenScrollTheme (positionY: number) {
  const themeTopValue = themeTops.value
  const _len = themeTopValue.length

  for (let i = 0; i < _len; i++) {
    const iPos = themeTopValue[i]
    if (positionY >= iPos && positionY < themeTopValue[i + 1]) {
      if (currentIndex.value !== i) {
        currentIndex.value = i
      }
      break
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  height: 100vh;

  .detail-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    &.ignore {
      bottom: 49px;
    }
  }
}
</style>
