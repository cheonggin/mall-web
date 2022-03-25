<template>
  <div class="list-sidebar ignore">
    <ul class="list-ul">
      <li
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ active: index === currentIndex }"
        @click="select(index,item.id)"
      >
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

import { ICategory } from '@/store/category/types'

defineProps({
  list: {
    type: Array as PropType<ICategory[]>,
    default: () => [],
    required: true
  }
})
const emits = defineEmits(['select'])
const currentIndex = ref(0)

function select (index: number, id:number) {
  currentIndex.value = index
  emits('select', id)
}
</script>

<style lang="scss" scoped>
.list-sidebar {
  position: fixed;
  left: 0;
  text-align: center;
  width: 2.5rem;
  overflow: hidden;
  z-index: 20;

  &.ignore {
    top: 50px;
    bottom: 49px;
  }

  .list-ul {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -0.3rem;
    padding: 0 0.3rem 0.3rem 0;
    background: #fefefe;
    overflow-y: auto;

    li {
      position: relative;
      font-size: 0.4rem;
      line-height: 1.2rem;

      &.active {
        font-weight: 700;
        color: #ff5934;

        &::after {
          content: '';
          display: block;
          width: 0.07rem;
          height: 0.4rem;
          background: #ff5934;
          position: absolute;
          left: 0;
          top: 0.4rem;
        }
      }

      span {
        display: block;
        height: 1.2rem;
      }
    }
  }
}
</style>
