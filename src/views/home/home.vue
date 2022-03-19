<template>
  <div id="home">
    <HomeNav />
    <Scroll
      ref="scrollRef"
      class="home-content ignore"
      :probeType="3"
      @scroll="contentScroll"
    >
      <div>
        <HomeSwiper :images="bannerList" />
        <HomeShortcut :list="shortcutList" />
        <HomeRecommend :list="recommendList" />
      </div>
    </Scroll>
    <BackTop v-show="isShowBackTop" @click="backToTop" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import Scroll from '@/components/common/scroll'
import BackTop from '@/components/content/back-top'
import HomeNav from './children/home-nav.vue'
import HomeSwiper from './children/home-swiper.vue'
import HomeShortcut from './children/home-shortcut.vue'
import HomeRecommend from './children/home-recommend.vue'

import useHomeStore from '@/store/home'

const homeStore = useHomeStore()
homeStore.getHomeDataAction()

const bannerList = computed(() => homeStore.bannerList)
const shortcutList = computed(() => homeStore.shortcutList)
const recommendList = computed(() => homeStore.recommendList)

const isShowBackTop = ref(false)
const scrollRef = ref<InstanceType<typeof Scroll>>()

// 根据滚动位置控制回到顶部按钮的显示与隐藏
function contentScroll (pos: any) {
  isShowBackTop.value = -pos.y > 300
}

function backToTop () {
  scrollRef.value?.scroll?.scrollTo(0, 0, 500)
}
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;

  .home-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;

    &.ignore {
      top: 50px;
    }
  }
}
</style>
