import { computed } from 'vue'
import BNavbarNavInterface from '@/components/BNavbarNav/BNavbarNav.interface'

const useBNavbarNavController = (props: BNavbarNavInterface) => {
  const justifyContentFromProp = computed(() => {
    let justifyContent = ''
    if (props.align === 'right' || props.align === 'end') {
      justifyContent = 'justify-content-end'
    }
    if (props.align === 'left' || props.align === 'start') {
      justifyContent = 'justify-content-start'
    }
    if (props.align === 'center') {
      justifyContent = 'justify-content-center'
    }

    return justifyContent
  })

  const navFill = computed(() => {
    return props.fill ? 'nav-fill' : null
  })

  const navJustified = computed(() => {
    return props.justified ? 'nav-justified' : null
  })

  const navSmall = computed(() => {
    return props.small ? 'small' : null
  })

  return {
    justifyContentFromProp,
    navFill,
    navJustified,
    navSmall
  }
}

export default useBNavbarNavController
