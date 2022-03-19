<template>
  <Navbar>
    <template #left>
      <div class="app-header-item logo">
        <img src="~@/assets/images/home/logo.png" alt="" />
      </div>
    </template>
    <template #center>
      <van-search placeholder="搜索商品名称" @focus="$router.push('/search')" />
    </template>
    <template #right>
      <div class="app-header-item" @click="$router.push('/profile')">
        <div class="ipt-img-box">
          <img src="~@/assets/images/home/icon-user.png" alt="" />
        </div>
      </div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from '@/components/common/navbar'
</script>

<style lang="scss" scoped>
.app-header-item {
  width: 1rem;
  margin: 0 0.2rem;

  &.logo > img {
    width: 80%;
  }

  .ipt-img-box {
    width: 1rem;
    height: 1rem;
    padding: 0.1rem;
    margin-top: 0.22rem;

    img {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}

:deep(.van-search) {
  width: 100%;
  background-color: #f2f2f2;

  .van-search__content {
    height: .6rem;
    align-items: center;
    background-color: #fff;
  }
}
</style>
