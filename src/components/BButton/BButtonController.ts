import { computed, ref, watch } from 'vue'
import BButtonInterface from '@/components/BButton/BButton.interface'

const useBButtonController = (props: BButtonInterface) => {
  const isBlock = computed(() => {
    return props.block ? 'display: block; width: 100%;' : null
  })

  const isPill = computed(() => {
    return props.pill ? 'rounded-pill' : null
  })

  const isSquared = computed(() => {
    return props.squared ? 'rounded-0' : null
  })

  const isActive = computed(() => {
    return props.active ? 'active' : null
  })

  const isActivePressed = computed(() => {
    return props.pressed ? 'active' : null
  })

  const isAriaPressed = computed(() => {
    return props.pressed ? true : null
  })

  const isRouterLink = computed(() => {
    return props.to ? 'router-link' : props.tag
  })

  const isSize = computed(() => {
    return props.size ? ` btn-${props.size}` : null
  })

  const isDisabled = computed(() => {
    return ref(props.disabled).value ? 'disabled' : null
  })

  watch(
    () => props.disabled,
    (val) => {
      ref(props.disabled).value = !val
    }
  )

  return {
    isBlock,
    isPill,
    isSquared,
    isActive,
    isActivePressed,
    isAriaPressed,
    isRouterLink,
    isSize,
    isDisabled
  }
}

export default useBButtonController
