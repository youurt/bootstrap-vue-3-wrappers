<template>
  <b-form-group
    id="fieldset-1"
    label="Enter you name"
    description="Let us know your name."
    label-for="input-1"
    valid-feedback="Thank you!"
    :invalid-feedback="invalidFeedback"
    :state="state"
  >
    <b-form-input id="input-1" v-model="name" :state="state" trim />
  </b-form-group>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormGroup',

  setup() {
    const name = ref('')
    const state = computed(() => {
      return name.value.length >= 4
    })
    const invalidFeedback = computed(() => {
      return name.value.length > 0
        ? 'Enter at least 4 characters.'
        : 'Please enter sth.'
    })

    return { name, state, invalidFeedback }
  }
})
</script>
