<template>
  <datalist v-bind="$attrs">
    <template v-for="(option, index) in options" :key="index">
      <option>{{ option }} </option>
    </template>
  </datalist>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BFormDatalist',
  props: {
    options: {
      type: [Array, Object],
      default: () => []
    }
  }
})
</script>
