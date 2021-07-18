<template>
  <div
    :class="['form-group', stateValidation]"
    :aria-invalid="ariaStateValidation"
    v-bind="$attrs"
  >
    <b-form>
      <label :id="`${id}__BV_label_`" class="d-block" :for="labelFor">{{
        label
      }}</label>
      <slot />
      <b-form-valid-feedback
        tabindex="-1"
        :id="`${id}__BV_feedback_valid_`"
        :state="state"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        >{{ validFeedback }}</b-form-valid-feedback
      >
      <b-form-invalid-feedback
        tabindex="-1"
        :id="`${id}__BV_feedback_invalid_`"
        :state="state"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        >{{ invalidFeedback }}
      </b-form-invalid-feedback>

      <b-form-text tabindex="-1" :id="`${id}__BV_description_`">
        {{ description }}
      </b-form-text>
    </b-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useBFormGroupController from '@/components/BFormGroup/BFormGroupController'

export default defineComponent({
  name: 'BFormGroup',
  props: {
    label: {
      type: String
    },
    labelFor: {
      type: String
    },
    state: {
      type: Boolean,
      default: null
    },
    id: {
      type: String
    },
    validFeedback: {
      type: String
    },
    invalidFeedback: {
      type: String
    },
    description: {
      type: String
    }
  },
  setup(props) {
    const { stateValidation, ariaStateValidation } = useBFormGroupController(
      props
    )
    return {
      stateValidation,
      ariaStateValidation
    }
  }
})
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
