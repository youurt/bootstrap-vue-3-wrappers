import { SetupContext } from '@vue/runtime-core'
import { h } from 'vue'

const slotsArrayFromNodes = (ctx: SetupContext) => {
  return ctx.slots
    .default?.()
    .map((vnode) => h('div', { class: 'col-auto' }, vnode))
}

export default slotsArrayFromNodes
