<template>
  <footer @click="onClick">
    <a href="javascript:;">{{ title }}</a>
  </footer>
</template>

<script setup lang="ts">
const emits = defineEmits(['afterClick'])
defineProps({
  title: { type: String, default: '' }
})

function onClick () {
  emits('afterClick')
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background-color: #ff6700;
  height: 1.4rem;
  text-align: center;
  line-height: 1.4rem;

  a {
    font-size: 0.4rem;
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
}
</style>
