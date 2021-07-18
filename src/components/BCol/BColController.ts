import { computed } from 'vue'
import BColInterface from '@/components/BCol/BCol.interface'
import sizeGenerator from '@/components/BCol/helpers/sizeGenerator'

const useBColController = (props: BColInterface) => {
  const isAlignSelf = computed(() => {
    return props.alignSelf ? `align-self-${props.alignSelf}` : null
  })

  const isCol = computed(() => {
    return (props.lg || props.md || props.sm || props.xl) && props.col
      ? 'col'
      : !(props.lg || props.md || props.sm || props.xl)
      ? 'col'
      : null
  })

  const hasCols = computed(() => {
    return props.cols ? `col-${props.cols}` : null
  })

  const colsGenerated = computed(() => {
    return sizeGenerator(props)
  })

  const offsetXs = computed(() => {
    return props.offset ? `offset-${props.offset}` : null
  })

  const offsetGenerated = computed(() => {
    return sizeGenerator(props, 'offset')
  })

  const orderXs = computed(() => {
    return props.order ? `order-${props.order}` : null
  })

  const orderGenerated = computed(() => {
    return sizeGenerator(props, 'order')
  })

  return {
    isAlignSelf,
    isCol,
    hasCols,
    colsGenerated,
    offsetXs,
    offsetGenerated,
    orderXs,
    orderGenerated
  }
}

export default useBColController
