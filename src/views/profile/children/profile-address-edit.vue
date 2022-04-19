<template>
  <ProfileNav title="新建地址" />

  <van-address-edit
    :area-list="areaList"
    show-set-default
    :show-delete="Boolean(id)"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    :address-info="addressInfo"
    @save="onSave"
     @delete="onDelete"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AddressEditInfo } from 'vant'
import { areaList } from '@vant/area-data'

import ProfileNav from './profile-nav.vue'

import { useAddressStore } from '@/store/address'

const addressStore = useAddressStore()
const route = useRoute()
const router = useRouter()
const id = ref(parseInt(route.params.id as string))
const addressInfo = computed(() => addressStore.addressInfo)

id.value && addressStore.getDataByIdAction(id.value)

function onSave (content: AddressEditInfo) {
  const { country, postalCode, ...result } = content // eslint-disable-line

  // 有id则更新，无id则添加
  if (id.value) {
    addressStore.updateDataAction(id.value, result)
  } else {
    addressStore.addDataAction(result)
  }

  // 退回上一页
  router.back()
}

function onDelete () {
  addressStore.deleteDataAction(id.value)

  // 退回上一页
  router.back()
}
</script>

<style lang="scss" scoped>
.van-address-edit {
  margin-top: 1.4rem;
}
</style>
