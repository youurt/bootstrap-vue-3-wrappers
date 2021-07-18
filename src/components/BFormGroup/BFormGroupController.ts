import BFormGroupInterface from '@/components/BFormGroup/BFormGroup.interface'
import { computed } from 'vue'

const useBFormGroupController = (props: BFormGroupInterface) => {
  const stateValidation = computed(() => {
    return props.state ? 'is-valid' : 'is-invalid'
  })

  const ariaStateValidation = computed(() => {
    return props.state ? null : !props.state
  })

  return { stateValidation, ariaStateValidation }
}

export default useBFormGroupController
