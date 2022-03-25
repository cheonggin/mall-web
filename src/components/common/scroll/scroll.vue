<template>
  <div ref="wrapperRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import BScroll, { BScrollInstance } from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(ObserveDOM)
BScroll.use(MouseWheel)

const props = defineProps({
  probeType: { type: Number, default: 1 },
  click: { type: Boolean, default: true },
  eventPassthrough: { type: String, default: '' }
})
const emits = defineEmits(['scroll'])
const wrapperRef = ref<HTMLElement | string>('')
const scroll = ref<BScrollInstance>()

nextTick(() => {
  scroll.value = new BScroll(wrapperRef.value, {
    observeDOM: true,
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300
    },
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
