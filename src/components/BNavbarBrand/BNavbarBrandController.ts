import { computed, watch, ref } from 'vue'

const useBNavbarBrandController = (disabled: boolean) => {
  const isNavLinkWhenDisabled = computed(() => {
    return disabled ? 'nav-link' : null
  })
  const ariaDisabled = computed(() => {
    return disabled ? true : null
  })
  const tabindex = computed(() => {
    return disabled ? '-1' : null
  })

  // const isDisabled = computed(() => {
  //   return ref(disabled).value ? 'disabled' : null
  // })

  // watch(
  //   () => disabled,
  //   (val) => {
  //     ref(disabled).value = !val
  //   }
  // )

  return {
    isNavLinkWhenDisabled,
    ariaDisabled,
    tabindex
  }
}

export default useBNavbarBrandController
