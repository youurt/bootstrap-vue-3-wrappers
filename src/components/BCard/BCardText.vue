<template>
  <p class="card-text" v-bind="$attrs"><slot /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BCardText'
})
</script>
