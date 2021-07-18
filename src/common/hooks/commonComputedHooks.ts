import { computed } from 'vue'

export const useIsDisabled = (disabled: boolean) => {
  const isDisabled = computed(() => {
    return disabled ? 'disabled' : null
  })

  return {
    isDisabled
  }
}
