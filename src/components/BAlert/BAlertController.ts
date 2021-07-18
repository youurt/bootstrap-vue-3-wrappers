import { computed } from 'vue'
import BAlertInterface from '@/components/BAlert/BAlert.interface'

const useBAlertController = (props: BAlertInterface) => {
  const isShow = computed(() => {
    return props.show ? props.show : props.modelValue
  })

  const isAnimateShowFade = computed(() => {
    return props.dismissible || props.modelValue
      ? ['show', 'fade', 'alert-dismissible']
      : null
  })

  const isFade = computed(() => {
    return props.fade ? 'fade' : null
  })

  return { isShow, isAnimateShowFade, isFade }
}

export default useBAlertController
