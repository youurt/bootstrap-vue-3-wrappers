<template>
  <div class="form-check">
    <input
      v-bind="$attrs"
      v-model="updateModelValue"
      class="form-check-input"
      type="radio"
      :id="generatedId"
    />
    <label class="form-check-label" :for="generatedId">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBFormRadioController from '@/components/BFormRadio/BFormRadioController'

export default defineComponent({
  name: 'BFormRadio',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String
    }
  },
  setup(props, ctx) {
    const { updateModelValue, generatedId } = useBFormRadioController(
      props,
      ctx
    )

    return { updateModelValue, generatedId }
  }
})
</script>
