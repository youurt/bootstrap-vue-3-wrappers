<template>
  <component
    :is="isRouterLink"
    :to="to"
    :style="isBlock"
    :class="[
      'btn',
      `btn-${variant}`,
      isPill,
      isSquared,
      isDisabled,
      isSize,
      isActivePressed,
      isActive
    ]"
    :type="type"
    :aria-pressed="isAriaPressed"
    :target="target"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref, computed } from 'vue'
import useBButtonController from '@/components/BButton/BButtonController'
import { ButtonType, Variant, Size } from '@/components/BButton/BButtonTypes'
import { useIsDisabled } from '@/common/hooks/commonComputedHooks'

export default defineComponent({
  name: 'BButton',
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'secondary'
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    },
    squared: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<Size>,
      default: ''
    },
    pressed: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'button'
    },
    to: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    }
  },

  setup(props) {
    const {
      isActivePressed,
      isAriaPressed,
      isBlock,
      isActive,
      isPill,
      isSquared,
      isRouterLink,
      isSize,
      isDisabled
    } = useBButtonController(props)

    // const { isDisabled } = useIsDisabled(props.disabled)

    return {
      isBlock,
      isPill,
      isSquared,
      isDisabled,
      isActive,
      isActivePressed,
      isAriaPressed,
      isRouterLink,
      isSize
    }
  }
})
</script>
