<template>
  <Tabbar>
    <TabbarItem v-for="item in tabbarData" :key="item.link" :link="item.link">
      <template #icon>
        <img :src="item.img" alt="" />
      </template>
      <template #icon-active>
        <img :src="item.img_active" alt="">
      </template>
      <template #text>{{ item.text }}</template>
    </TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from '@/components/common/tabbar'
import { tabbarData } from './config/tabbarData.config'
</script>

<style lang="scss" scoped></style>
