import { toRefs, watch, ref } from 'vue'
import BAlertInterface from '@/components/BAlert/BAlert.interface'
import { SetupContext } from 'vue'

const useAlertCountdown = (props: BAlertInterface, ctx: SetupContext) => {
  const { show } = toRefs(props)
  let myInterval = 0
  const start = ref(0)
  const end = ref(0)

  watch(show, (oldValue, newValue) => {
    start.value = Number(oldValue)
    end.value = Number(newValue)

    if (start.value && !end.value) {
      let counter = Number(show.value)

      myInterval = setInterval(() => {
        if (start.value > end.value) {
          counter = Number(show.value)
        }
        counter--

        ctx.emit('dismiss-count-down', Number(counter))
        if (Number(counter) === 0) {
          clearInterval(myInterval)
        }
      }, 1000)
    }

    if (!start.value && end.value) {
      clearInterval(myInterval)
    }
  })

  return { myInterval }
}

export default useAlertCountdown
