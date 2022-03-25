<template>
  <div class="navbar ignore">
    <div class="app-header-left"><slot name="left"></slot></div>
    <div class="app-header-center"><slot name="center"></slot></div>
    <div class="app-header-right"><slot name="right"></slot></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  color: #666;
  background: #f2f2f2;
  text-align: center;

  &.ignore {
    height: 50px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  .app-header-center {
    flex: 1;
    min-width: 1rem;
  }
}
</style>
