<template>
  <div id="detail" v-if="tabList.length > 0">
    <DetailNav :title-infos="['商品', '评价', '详情']" />
    <DetailSwiper :images="bannerList" />
    <DetailBaseInfo :data="goodsInfoData" />
    <DetailComment :data="commentsData" />
    <DetailInfoTab :list="tabList" />
    <DetailFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const product_id = ref(parseInt(route.params.id as string))
const bannerList = ref<IDetailSwiper[]>()
const goodsInfoData = ref<IGoodsInfoData>({} as IGoodsInfoData)
const commentsData = reactive<IGoodsInfoComments>({
  detail: { satisfy_per: '', comment_tags: [] },
  list: []
})
const tabList = ref<IGoodsInfoTabList[]>([])

async function initData (id: number) {
  const { data } = await getGoodsInfo(id)

  bannerList.value = data.banner
  goodsInfoData.value = data.goodsInfoData
  commentsData.detail = data.comment.detail
  commentsData.list = data.comment.list
  tabList.value = data.tabs
}
initData(product_id.value)
</script>

<style scoped></style>
