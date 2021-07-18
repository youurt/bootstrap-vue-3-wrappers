<template>
  <div class="m-4 p-2">
    <b-form-radio-group>
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="A"
        aria-describedby="ariaDescribedby"
        >Option A</b-form-radio
      >
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="B"
        aria-describedby="ariaDescribedby"
        >Option B</b-form-radio
      >
    </b-form-radio-group>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  setup() {
    const selected = ref('')

    watchEffect(() => {
      console.log(selected.value)
    })

    return { selected }
  }
})
</script>
