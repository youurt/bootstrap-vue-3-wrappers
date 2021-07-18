<template>
  <component
    :is="tag"
    :class="[
      'navbar-nav',
      justifyContentFromProp,
      navFill,
      navJustified,
      navSmall
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useBNavbarNavController from '@/components/BNavbarNav/BNavbarNavController'

export default defineComponent({
  name: 'BNavbarNav',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    small: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const {
      justifyContentFromProp,
      navFill,
      navJustified,
      navSmall
    } = useBNavbarNavController(props)

    return {
      justifyContentFromProp,
      navFill,
      navJustified,
      navSmall
    }
  }
})
</script>

<style lang="scss" scoped>
.small {
  font-size: 80%;
  font-weight: 400;
}
</style>
