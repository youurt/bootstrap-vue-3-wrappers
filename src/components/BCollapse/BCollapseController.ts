import { computed } from 'vue'

const useBCollapseController = (isNav: boolean) => {
  const isNavBar = computed(() => {
    return isNav ? 'navbar-collapse' : null
  })

  return { isNavBar }
}

export default useBCollapseController
