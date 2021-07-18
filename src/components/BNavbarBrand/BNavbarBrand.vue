<template>
  <component
    :is="tag"
    :to="to"
    :target="target"
    v-bind="$attrs"
    :class="['navbar-brand', isDisabled, isNavLinkWhenDisabled]"
    :aria-disabled="ariaDisabled"
    :tabindex="tabindex"
    ><slot
  /></component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useBNavbarBrandController from '@/components/BNavbarBrand/BNavbarBrandController'
import { useIsDisabled } from '@/common/hooks/commonComputedHooks'

export default defineComponent({
  name: 'BNavbarBrand',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    to: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {
      isNavLinkWhenDisabled,
      ariaDisabled,
      tabindex
      // isDisabled
    } = useBNavbarBrandController(props.disabled)

    const { isDisabled } = useIsDisabled(props.disabled)

    return { isDisabled, isNavLinkWhenDisabled, ariaDisabled, tabindex }
  }
})
</script>
