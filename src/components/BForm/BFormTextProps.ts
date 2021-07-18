import BFormTextInterface from '@/components/BForm/BFormTextProps.interface'
import { computed } from 'vue'

const useBFormTextHook = (props: BFormTextInterface) => {
  const isTextVariant = computed(() => {
    return props.textVariant ? `text-${props.textVariant}` : 'text-muted'
  })

  const isInline = computed(() => {
    return props.inline ? null : 'form-text'
  })

  return { isTextVariant, isInline }
}

export default useBFormTextHook
