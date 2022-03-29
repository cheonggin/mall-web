<template>
  <Navbar>
    <template #left>
      <div class="app-header-icon icon-back" @click="$router.back()">
        <img src="~@/assets/images/common/back.png" alt="" />
      </div>
    </template>
    <template #center>
      <van-search placeholder="搜索商品名称" left-icon="" v-model="query" @clear="onClear" />
    </template>
    <template #right>
      <div
        class="app-header-icon icon-search"
        @click="onSearch"
      >
        <img src="~@/assets/images/common/search.png" alt="" />
      </div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Navbar from '@/components/common/navbar'

const props = defineProps({
  modelValue: { type: String, default: '' }
})
const emits = defineEmits(['update:modelValue', 'search'])
const query = ref(props.modelValue)

watch(
  () => query.value,
  newQuery => emits('update:modelValue', newQuery)
)

function onClear () {
  query.value = ''
}

function onSearch () {
  emits('search')
}
</script>

<style lang="scss" scoped>
.app-header-icon {
  width: 1.2rem;

  img {
    width: 0.7rem;
    height: 0.7rem;
  }
}

:deep(.van-search) {
  width: 100%;
  background-color: #f2f2f2;
}
</style>
