<template>
  <div :key="componentKey" class="b-overlay-wrap position-relative">
    <slot />
    <div
      v-if="show"
      class="b-overlay position-absolute"
      :style="'inset: 0px; z-index: 10;'"
    >
      <div
        class="position-absolute bg-light rounded-sm"
        :style="'inset: 0px; opacity: 0.85; backdrop-filter: blur(2px);'"
      ></div>
      <div
        class="position-absolute"
        :style="
          'top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);'
        "
      >
        <span aria-hidden="true" class="spinner-border"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'
import useBOverlayController from '@/components/BOverlay/BOverlayController'

export default defineComponent({
  name: 'BOverlay',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String
    }
  },
  setup(props) {
    const { componentKey } = useBOverlayController(props)

    return {
      componentKey
    }
  }
})
</script>
