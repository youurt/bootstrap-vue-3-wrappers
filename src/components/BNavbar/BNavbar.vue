<template>
  <component
    :is="tag"
    :class="['navbar', stickyTop, isPrinted, expanded, navBarType, isFixed]"
    :style="bNavbarStyles"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBNavbarController from '@/components/BNavbar/BNavbarController'

export default defineComponent({
  name: 'BNavbar',
  props: {
    variant: {
      type: String,
      default: null
    },
    print: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'light'
    },
    fixed: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'nav'
    },
    sticky: {
      type: Boolean,
      default: false
    },
    toggleable: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const {
      bNavbarStyles,
      stickyTop,
      isPrinted,
      expanded,
      navBarType,
      isFixed
    } = useBNavbarController(props)

    return {
      bNavbarStyles,
      stickyTop,
      isPrinted,
      expanded,
      navBarType,
      isFixed
    }
  }
})
</script>
