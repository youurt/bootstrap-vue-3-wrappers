import { computed } from 'vue'
import BNavbarInterface from '@/components/BNavbar/BNavbar.interface'
import mapColorNameToCode from '@/helpers/colorMapping'
import colorMap from '@/helpers/colorMap'

const useBNavbarController = (props: BNavbarInterface) => {
  const bNavbarStyles = computed(() => {
    return [
      { background: mapColorNameToCode(props.variant, colorMap) },
      { padding: '0.5rem' }
    ]
  })

  const navBarType = computed(() => {
    return props.type === 'dark' ? 'navbar-dark' : 'navbar-light'
  })

  const stickyTop = computed(() => {
    return props.sticky ? 'sticky-top' : null
  })

  const isPrinted = computed(() => {
    return props.print ? 'd-print-block' : null
  })

  const expanded = computed(() => {
    return !props.toggleable ? 'navbar-expand' : null
  })

  const isFixed = computed(() => {
    return props.fixed !== null
      ? props.fixed === 'bottom'
        ? 'fixed-bottom'
        : 'fixed-top'
      : null
  })

  return {
    bNavbarStyles,
    stickyTop,
    isPrinted,
    expanded,
    navBarType,
    isFixed
  }
}

export default useBNavbarController
