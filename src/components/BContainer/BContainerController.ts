import { computed } from 'vue'

const useBContainerController = (fluid: string | boolean) => {
  const containerFluid = computed(() => {
    if (typeof fluid === 'boolean' && fluid === true) {
      return 'container-fluid'
    }

    if (typeof fluid === 'string' && ['sm', 'md', 'lg', 'xl'].includes(fluid)) {
      return `container-${fluid}`
    }

    return 'container'
  })

  return {
    containerFluid
  }
}

export default useBContainerController
