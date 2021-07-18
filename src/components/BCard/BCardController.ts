import { SetupContext } from '@vue/runtime-core'
import { computed } from 'vue'

const useBColController = (ctx: SetupContext) => {
  const imgTop = computed(() => {
    return ctx.attrs['img-top'] === '' ? 'card-img-top' : false
  })

  const imgBottom = computed(() => {
    return ctx.attrs['img-bottom'] === '' && ctx.attrs['img-top'] !== ''
      ? 'card-img-bottom'
      : false
  })

  return {
    imgTop,
    imgBottom
  }
}

export default useBColController
