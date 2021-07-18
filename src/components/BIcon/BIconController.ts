import { computed } from 'vue'
import BIconInterface from './BIcon.interface'

const useBIconController = (props: BIconInterface) => {
  const fontScaleCalc = computed(() => {
    return props.fontScale ? `font-size: ${props.fontScale * 100}%;` : null
  })

  const textVariant = computed(() => {
    return props.variant ? `text-${props.variant}` : null
  })

  return {
    fontScaleCalc,
    textVariant
  }
}

export default useBIconController
