<template>
  <component :is="tag" :class="containerFluid">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBContainerController from '@/components/BContainer/BContainerController'
export default defineComponent({
  name: 'BContainer',
  props: {
    fluid: {
      type: [Boolean, String],
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const { containerFluid } = useBContainerController(props.fluid)

    return {
      containerFluid
    }
  }
})
</script>
