<template>
  <form :class="validated ? 'was-validated' : null" v-bind="$attrs">
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import bFormClass from '@/components/BForm/BFormClass'
import slotsArrayFromNodes from '@/components/BForm/BFormSlotsElementsHook'

export default defineComponent({
  name: 'BForm',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    validated: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    if (props.inline) {
      return () =>
        h('form', { class: bFormClass(props) }, slotsArrayFromNodes(ctx))
    }
  }
})
</script>
