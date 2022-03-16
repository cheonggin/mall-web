<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  height: 49px;
  color:#999;
  font-size: 12px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 -3px 14px 2px rgb(0 0 0 / 12%);
}
</style>
