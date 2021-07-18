<template>
  <div :id="id" :class="['collapse', isNavBar]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBCollapseController from '@/components/BCollapse/BCollapseController'

export default defineComponent({
  name: 'BCollapse',
  props: {
    id: {
      type: String
    },
    isNav: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const { isNavBar } = useBCollapseController(props.isNav)

    return { isNavBar }
  }
})
</script>
