<template>
  <component
    :is="tag"
    :class="[
      'row',
      `row-cols-${cols}`,
      calcRowCols,
      `align-content-${alignContent}`,
      `justify-content-${alignH}`,
      `align-items-${alignV}`,
      hasNoGutters
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useBRowComputedHook from '@/components/BRow/BRowComputedHooks'
import {
  ColsType,
  AlignContentType,
  AlignHType,
  AlignVType
} from '@/components/BRow/BRowTypes'

export default defineComponent({
  name: 'BRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    alignContent: {
      type: String as PropType<AlignContentType>,
      default: null
    },
    alignH: {
      type: String as PropType<AlignHType>,
      default: null
    },
    alignV: {
      type: String as PropType<AlignVType>,
      default: null
    },
    cols: {
      type: String as PropType<ColsType>,
      default: null
    },
    colsSm: {
      type: String as PropType<ColsType>,
      default: null
    },
    colsMd: {
      type: String as PropType<ColsType>,
      default: null
    },
    colsLg: {
      type: String as PropType<ColsType>,
      default: null
    },
    colsXl: {
      type: String as PropType<ColsType>,
      default: null
    },
    noGutters: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { calcRowCols, hasNoGutters } = useBRowComputedHook(props)

    return { calcRowCols, hasNoGutters }
  }
})
</script>
