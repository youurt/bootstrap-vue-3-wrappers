<template>
  <component
    :is="tag"
    :class="[
      isCol,
      isAlignSelf,
      hasCols,
      colsGenerated,
      offsetXs,
      offsetGenerated,
      orderXs,
      orderGenerated
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBColController from '@/components/BCol/BColController'

export default defineComponent({
  name: 'BCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    alignSelf: {
      type: String,
      default: null
    },
    col: {
      type: Boolean,
      default: false
    },
    cols: {
      type: [String, Number]
    },
    lg: {
      type: [Boolean, Number, String]
    },
    md: {
      type: [Boolean, Number, String]
    },
    sm: {
      type: [Boolean, Number, String]
    },
    xl: {
      type: [Boolean, Number, String]
    },
    offset: {
      type: [Number, String]
    },
    offsetLg: {
      type: [Number, String]
    },
    offsetMd: {
      type: [Number, String]
    },
    offsetSm: {
      type: [Number, String]
    },
    offsetXl: {
      type: [Number, String]
    },
    order: {
      type: [Number, String]
    },
    orderLg: {
      type: [Number, String]
    },
    orderMd: {
      type: [Number, String]
    },
    orderSm: {
      type: [Number, String]
    },
    orderXl: {
      type: [Number, String]
    }
  },
  setup(props) {
    const {
      isAlignSelf,
      isCol,
      hasCols,
      colsGenerated,
      offsetXs,
      offsetGenerated,
      orderXs,
      orderGenerated
    } = useBColController(props)

    return {
      isAlignSelf,
      isCol,
      hasCols,
      colsGenerated,
      offsetXs,
      offsetGenerated,
      orderXs,
      orderGenerated
    }
  }
})
</script>
