import { computed, SetupContext, ref, watch } from 'vue'
import BFormInputInterface from '@/components/BFormInput/BFormInput.interface'
import parser from '@/components/BFormInput/helpers/stringToIntParser'
import trim from '@/components/BFormInput/helpers/stringTrimmer'

const useBFormInputController = (
  props: BFormInputInterface,
  ctx: SetupContext
) => {
  const pureFormControl = computed(() => {
    return props.type !== 'range' ? 'form-control' : null
  })

  const isRangeClass = computed(() => {
    return props.type === 'range' ? 'form-range' : null
  })

  const sizeClass = computed(() => {
    return props.size ? `form-control-${props.size}` : null
  })

  const isValid = computed(() => {
    return props.state === false
      ? 'is-invalid'
      : props.state
      ? 'is-valid'
      : null
  })

  const ariaInvalid = computed(() => {
    return !props.state ? true : null
  })

  const isReadOnly = computed(() => {
    return props.type === 'color' || props.type === 'range'
      ? null
      : props.readonly
      ? 'readonly'
      : null
  })

  const castVal = computed({
    get: () => props.modelValue,
    set: (value) => {
      ctx.emit(
        'update:modelValue',

        props.number && typeof value === 'string'
          ? trim(props, parser(value))
          : trim(props, value)
      )
    }
  })

  const isDisabled = computed(() => {
    return ref(props.disabled).value ? 'disabled' : null
  })

  watch(
    () => props.disabled,
    (val) => {
      ref(props.disabled).value = !val
    }
  )

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

export default useBFormInputController
