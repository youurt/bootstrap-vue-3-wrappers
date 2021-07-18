<template>
  <div :class="[isBody]" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BCardBody',
  props: {},
  setup(props, ctx) {
    const isBody = computed(() => {
      return ctx.attrs['no-body'] === undefined ? 'card-body' : null
    })

    return {
      isBody
    }
  }
})
</script>
