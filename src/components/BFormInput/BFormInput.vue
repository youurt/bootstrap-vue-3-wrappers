<template>
  <input
    :class="[pureFormControl, isRangeClass, sizeClass, isValid]"
    :placeholder="placeholder"
    v-model="castVal"
    :id="id"
    :type="type"
    :aria-invalid="ariaInvalid"
    :readonly="isReadOnly"
    :disabled="isDisabled"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useBFormInputController from '@/components/BFormInput/BFormInputController'
import { InputType } from '@/components/BFormInput/BFormInputTypes'
import { Size } from '@/common/types/commonTypes'
// import { useIsDisabled } from '@/common/hooks/commonComputedHooks'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Object],
      default: ''
    },
    id: {
      type: String
    },
    type: {
      type: String as PropType<InputType>,
      default: 'text'
    },
    size: {
      type: String as PropType<Size>
    },
    state: {
      type: Boolean,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    trim: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const {
      pureFormControl,
      isRangeClass,
      sizeClass,
      isValid,
      ariaInvalid,
      isReadOnly,
      castVal,
      isDisabled
    } = useBFormInputController(props, ctx)

    // const { isDisabled } = useIsDisabled(props.disabled)
    return {
      pureFormControl,
      isRangeClass,
      sizeClass,
      isValid,
      ariaInvalid,
      isReadOnly,
      castVal,
      isDisabled
    }
  }
})
</script>
