<template>
  <component
    :is="tag"
    role="group"
    :aria-roledescription="ariaRole"
    :class="[isVertical, btnGroupAlignment, isSize]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Size } from '@/common/types/commonTypes'
import useBButtonGroupontroller from '@/components/BButtonGroup/BButtonGroupController'

export default defineComponent({
  name: 'BButtonGroup',
  props: {
    size: {
      type: String as PropType<Size>,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    },
    ariaRole: {
      type: String,
      default: 'group'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const { btnGroupAlignment, isVertical, isSize } = useBButtonGroupontroller(
      props
    )

    return {
      btnGroupAlignment,
      isVertical,
      isSize
    }
  }
})
</script>
