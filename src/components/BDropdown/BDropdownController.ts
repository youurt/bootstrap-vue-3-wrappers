import {
  BDropdownInterface,
  BDropdownItemInterface
} from '@/components/BDropdown/BDropdown.interface'
import { computed } from 'vue'

export const useBDropdownController = (props: BDropdownInterface) => {
  const addedStyle = computed(() => {
    return 'position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(0px, -40px);'
  })

  const isDropup = computed(() => {
    return props.dropup ? 'dropup' : null
  })

  const isDropright = computed(() => {
    return props.dropright ? 'dropend' : null
  })

  const isDropleft = computed(() => {
    return props.dropleft ? 'dropstart' : null
  })

  const isRight = computed(() => {
    return props.right ? 'dropdown-menu-end' : null
  })

  return {
    addedStyle,
    isDropup,
    isDropright,
    isDropleft,
    isRight
  }
}

export const useBdropdownItemController = (props: BDropdownItemInterface) => {
  const isActive = computed(() => {
    return props.active ? 'active' : null
  })

  const isDisabled = computed(() => {
    return props.disabled ? 'disabled' : null
  })

  return {
    isActive,
    isDisabled
  }
}
