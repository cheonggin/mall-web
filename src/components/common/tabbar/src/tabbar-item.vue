<template>
  <div class="tabbar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-icon-active" v-show="isActive"><slot name="icon-active"></slot></div>
    <div class="item-text"><slot name="text"></slot></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  link: { type: String, required: true }
})
const route = useRoute()
const router = useRouter()
const isActive = computed(() => {
  return route.path.includes(props.link)
})

function itemClick () {
  router.replace(props.link)
}
</script>

<style lang="scss" scoped>
.tabbar-item{
  flex: 1;

  .item-icon {
    margin: 0 auto;
  }

  :deep(img) {
    width: .5rem;
    height: .5rem;
    margin-bottom: 0.1rem;
  }
}
</style>
