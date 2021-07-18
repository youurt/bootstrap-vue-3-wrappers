<template>
  <div>
    <b-form-checkbox id="checkbox-1" value="accepted"
      >Some Checkbox</b-form-checkbox
    >
  </div>

  <div>
    State: <strong>{{ status }}</strong>
  </div>
</template>

<script lang="ts">
import BFormCheckbox from '@/components/BFormCheckbox/BFormCheckbox.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormCheckBox',
  setup() {
    const status = ref(false)

    return { status }
  }
})
</script>
