<template>
  <div ref="wrapperRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BScroll, { CustomAPI } from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'
import Pullup from '@better-scroll/pull-up'
import { DefOptions } from '@better-scroll/core/dist/types/Options'
import { UnionToIntersection } from '@better-scroll/core/dist/types/utils/typesHelper'

type ExtractAPI<O> = {
  [K in keyof O]: K extends string
    ? DefOptions[K] extends undefined
      ? CustomAPI[K]
      : never
    : never
}[keyof O]
type BScrollInterface = BScroll &
  UnionToIntersection<ExtractAPI<{ wheel: true; pullUpLoad: true }>>

BScroll.use(ObserveDOM)
BScroll.use(MouseWheel)
BScroll.use(Pullup)

const props = defineProps({
  probeType: { type: Number, default: 1 },
  click: { type: Boolean, default: true },
  eventPassthrough: { type: String, default: '' }
})
const emits = defineEmits(['scroll', 'pullingUp'])
const wrapperRef = ref<HTMLElement | string>('')
const scroll = ref<BScrollInterface | null>(null)

onMounted(() => {
  scroll.value = new BScroll(wrapperRef.value, {
    observeDOM: true,
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300
    },
    pullUpLoad: true,
    ...props
  })

  if (props.probeType > 0) {
    scroll.value.on('scroll', (pos: { x: number; y: number }) => {
      emits('scroll', pos)
    })
  }

  scroll.value.on('pullingUp', () => {
    emits('pullingUp')
  })
})

defineExpose({ scroll })
</script>

<style scoped></style>
