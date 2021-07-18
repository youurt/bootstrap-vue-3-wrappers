<template>
  <component :is="tag"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BDropdownDivider',
  props: {
    tag: {
      type: String,
      default: 'hr'
    }
  },
  setup() {
    console.log('divider')
  }
})
</script>
