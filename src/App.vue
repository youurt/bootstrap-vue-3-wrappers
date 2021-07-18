<template>
  <div class="flex-fill overflow-auto">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'

export default defineComponent({})
</script>

<style>
html,
body {
  height: 100%;
}
</style>
