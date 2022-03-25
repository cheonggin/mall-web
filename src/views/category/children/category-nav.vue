<template>
  <Navbar>
    <template #center>
      <van-search placeholder="搜索商品名称" @focus="$router.push('/search')" />
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from '@/components/common/navbar'
</script>

<style lang="scss" scoped>
:deep(.van-search) {
  width: 100%;
  background-color: #f2f2f2;

  .van-search__content {
    height: 0.6rem;
    align-items: center;
    background-color: #fff;
  }
}
</style>
