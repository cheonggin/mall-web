<template>
  <div class="profile-address">
    <ProfileNav title="收货地址" />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AddressListAddress, AddressEditInfo } from 'vant'

import ProfileNav from './profile-nav.vue'

import { useAddressStore } from '@/store/address'

const router = useRouter()
const addressStore = useAddressStore()
addressStore.getDataAction()

const chosenAddressId = ref(1)
const list = computed(() => addressStore.addressList)

function onAdd () {
  addressStore.addressInfo = {} as AddressEditInfo
  router.push('/profile/address/edit')
}

function onEdit (item: AddressListAddress) {
  router.push(`/profile/address/edit/${item.id}`)
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
