import BAlertInterface from '@/components/BAlert/BAlert.interface'
import { SetupContext } from 'vue'

const useDissmissHandler = (
  myInterval: number,
  props: BAlertInterface,
  ctx: SetupContext
) => {
  const dissmissHandler = () => {
    clearInterval(myInterval)

    if (props.modelValue) {
      ctx.emit('update:modelValue', !props.modelValue)
    }

    ctx.emit('dismissed')
  }

  return {
    dissmissHandler
  }
}

export default useDissmissHandler
