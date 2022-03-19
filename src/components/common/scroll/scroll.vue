<template>
  <div ref="wrapperRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BScroll, { BScrollInstance } from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

const props = defineProps({
  probeType: { type: Number, default: 1 },
  click: { type: Boolean, default: true }
})
const emits = defineEmits(['scroll'])
const wrapperRef = ref<HTMLElement | string>('')
const scroll = ref<BScrollInstance>()

onMounted(() => {
  scroll.value = new BScroll(wrapperRef.value, {
    observeDOM: true,
    ...props
  })

  if (props.probeType > 0) {
    scroll.value.on('scroll', (pos: any) => {
      emits('scroll', pos)
    })
  }
})

defineExpose({ scroll })
</script>

<style scoped></style>
