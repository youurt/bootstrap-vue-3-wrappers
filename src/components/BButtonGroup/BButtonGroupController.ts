import { computed } from 'vue'
import BButtonGroupInterface from '@/components/BButtonGroup/BButtonGroup.interface'

const useBButtonGroupontroller = (props: BButtonGroupInterface) => {
  const btnGroupAlignment = computed(() => {
    return props.vertical ? 'btn-group-vertical' : null
  })

  const isVertical = computed(() => {
    return props.vertical ? null : 'btn-group'
  })

  const isSize = computed(() => {
    return props.size ? `btn-group-${props.size}` : null
  })

  return { btnGroupAlignment, isVertical, isSize }
}

export default useBButtonGroupontroller
