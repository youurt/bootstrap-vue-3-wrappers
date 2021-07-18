import { ref, computed, watch } from 'vue'

const useBNavbarToggleController = () => {
  const toggleStatus = ref(false)
  const collapseStatus = ref('')

  const collapseHandler = () => {
    toggleStatus.value = !toggleStatus.value
    toggleStatus.value
      ? (collapseStatus.value = 'not-collapsed')
      : (collapseStatus.value = 'collapsed')
  }

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
    toggleStatus,
    collapseStatus,
    collapseHandler
    // isDisabled
  }
}

export default useBNavbarToggleController
