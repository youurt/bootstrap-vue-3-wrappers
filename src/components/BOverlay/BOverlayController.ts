import { ref, watchEffect } from 'vue'
import BOverlayInterface from '@/components/BOverlay/BOverlay.interface'

const useBOverlayController = (props: BOverlayInterface) => {
  const componentKey = ref(0)

  const updateKey = () => {
    componentKey.value += 1
  }

  watchEffect(() => {
    props.show
    updateKey()
  })

  return { componentKey }
}

export default useBOverlayController
