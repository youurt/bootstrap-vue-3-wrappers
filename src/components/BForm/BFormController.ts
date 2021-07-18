import BFormValidationInterface from '@/components/BForm/BFormValidationProps.interface'
import { computed } from 'vue'

const useBFormController = (props: BFormValidationInterface) => {
  const isValid = computed(() => {
    return props.forceShow ? 'd-block' : props.state ? 'd-block' : null
  })

  const isInvalid = computed(() => {
    return props.forceShow ? 'd-block' : props.state ? null : 'd-block'
  })

  const isTooltipValid = computed(() => {
    return props.tooltip ? 'valid-tooltip' : 'valid-feedback'
  })

  const isTooltipInvalid = computed(() => {
    return props.tooltip ? 'invalid-tooltip' : 'invalid-feedback'
  })

  return {
    isValid,
    isInvalid,
    isTooltipValid,
    isTooltipInvalid
  }
}

export default useBFormController
