import { computed } from 'vue'
import BRowComputedInterface from '@/components/BRow/BRowComputed.interface'

const useBRowComputedHook = (props: BRowComputedInterface) => {
  const calcRowCols = computed(() => {
    return [
      props.colsSm ? `row-cols-sm-${props.colsSm}` : null,
      props.colsMd ? `row-cols-md-${props.colsMd}` : null,
      props.colsLg ? `row-cols-lg-${props.colsLg}` : null,
      props.colsXl ? `row-cols-xl-${props.colsXl}` : null
    ]
  })

  const hasNoGutters = computed(() => {
    return props.noGutters ? 'g-0' : null
  })

  return { calcRowCols, hasNoGutters }
}

export default useBRowComputedHook
