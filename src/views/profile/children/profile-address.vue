<template>
  <div class="profile-address">
    <ProfileNav title="收货地址" />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AddressListAddress, AddressEditInfo } from 'vant'

import ProfileNav from './profile-nav.vue'

import { useAddressStore } from '@/store/address'
import { localCache } from '@/utils/cache'

const route = useRoute()
const router = useRouter()

// pinia
const addressStore = useAddressStore()
addressStore.getDataAction()
const list = computed(() => addressStore.addressList)

const chosenAddressId = ref(1)
const isOrderJump = ref((route.query.type as string) === 'order') // 记录当前页面是否从order页面跳转过来

console.log(route.query.type)

function onAdd () {
  addressStore.addressInfo = {} as AddressEditInfo
  router.push('/profile/address/edit')
}

function onEdit (item: AddressListAddress) {
  router.push(`/profile/address/edit/${item.id}`)
}

function onSelect (item: AddressListAddress) {
  if (isOrderJump.value) {
    // 修改当前selectAddress的值
    addressStore.selectAddress = item
    localCache.setCache('select_address', item)

    router.back()
  }
}
</script>

<style lang="scss" scoped>
.van-address-list {
  margin-top: 1.4rem;
}

:deep(.van-address-list__bottom) {
  padding: 0;

  .van-button {
    border-radius: 0;
    margin: 0;
    height: 1.4rem;
    font-size: 0.4rem;
  }
}
</style>
