import { computed, SetupContext } from 'vue'
import BFormRadioInterface from '@/components/BFormRadio/BFormRadio.interface'

const useBFormRadioController = (
  props: BFormRadioInterface,
  ctx: SetupContext
) => {
  const updateModelValue = computed({
    get: () => props.modelValue,
    set: (value) => {
      ctx.emit('update:modelValue', value)
    }
  })

  const generatedId = computed(() => {
    return props.id ? props.id : `__BVID__${Math.floor(Math.random() * 1000)}`
  })

  return { updateModelValue, generatedId }
}

export default useBFormRadioController
