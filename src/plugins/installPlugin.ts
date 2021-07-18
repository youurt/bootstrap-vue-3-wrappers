import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import kebabCase from 'lodash/kebabCase'
import { VNode, Component } from 'vue'
import { App } from '@vue/runtime-core'
import setDirectiveAttribute from '@/helpers/directiveAttribute'

export interface BvMsgBoxOptions {
  title?: string | VNode | Array<VNode>
  titleTag?: string
  size?: string
  centered?: boolean
  scrollable?: boolean
  noFade?: boolean
  noCloseOnBackdrop?: boolean
  noCloseOnEsc?: boolean
  headerBgVariant?: string
  headerBorderVariant?: string
  headerTextVariant?: string
  headerCloseVariant?: string
  headerClass?: string | string[] | Array<any>
  bodyBgVariant?: string
  bodyBorderVariant?: string
  bodyTextVariant?: string
  bodyClass?: string | string[] | Array<any>
  footerBgVariant?: string
  footerBorderVariant?: string
  footerTextVariant?: string
  footerClass?: string | string[] | Array<any>
  headerCloseLabel?: string
  buttonSize?: string
  cancelTitle?: string
  cancelVariant?: string
  okTitle?: string
  okVariant?: string
  // Catch all
  [key: string]: any
}

const installPlugin = (app: App) => {
  const reqireComponent = require.context(
    '../components',
    true,
    /[A-Z]\w+\.(vue)$/
  )

  reqireComponent.keys().forEach(filename => {
    const componentConfig = reqireComponent(filename)

    const componentName = upperFirst(
      camelCase(
        filename
          .split('/')
          .pop()
          ?.replace(/\.\w+$/, '')
      )
    )

    app.component(
      kebabCase(componentName),
      componentConfig.default || componentConfig
    )
  })

  app.directive('bModal', {
    mounted(el, binding) {
      setDirectiveAttribute(el, binding, 'modal')
    },
  })

  // app.config.globalProperties.$bvModal = {
  //   msgBoxConfirm: (
  //     message: string | Array<VNode>,
  //     options?: BvMsgBoxOptions
  //   ): Promise<BvMsgBoxData> => {
  //     return Promise.resolve()
  //   },
  // }

  // app.config.globalProperties.$toast = {
  //   makeSomeDiv: (): void => {
  //     const parent = document.getElementById('app')

  //     // createApp(BToast, { text: 'y' }).mount(parent!)
  //   }
  // }

  app.directive('bToggle', {
    mounted(el, binding) {
      setDirectiveAttribute(el, binding, 'collapse')
    },
  })
}

export default installPlugin

export interface BvEvent {
  readonly type: string
  readonly cancelable: boolean
  readonly nativeEvent: any
  readonly target: any
  readonly relatedTarget: any
  readonly defaultPrevented: boolean
  readonly vueTarget: App | Component | null
  readonly componentId: string | null
  preventDefault: () => void
  // Catch all
  [key: string]: any
}

// --- Interfaces ---
export interface BvModalEvent extends BvEvent {
  readonly trigger: string | null
  // Future
  // details: any | null
}

export type BvMsgBoxData = boolean | null | BvModalEvent | any

export interface BvModalMsgBoxShortcutMethod {
  (message: string | Array<VNode>, options?: BvMsgBoxOptions): Promise<
    BvMsgBoxData
  >
  // Future
  // (options?: BvMsgBoxOptions): Promise<BvMsgBoxData>
  // (message: string | Array<VNode>, title: string | Array<VNode>, options?: BvMsgBoxOptions): Promise<BvMsgBoxData>
}

export interface BvModal {
  // Show OK MsgBox
  // msgBoxOk: BvModalMsgBoxShortcutMethod

  // Show Confirm MsgBox
  msgBoxConfirm: BvModalMsgBoxShortcutMethod

  // Show a modal by id
  show: (id: string) => void

  // Hide a modal by id
  hide: (id: string) => void
}

// declare module 'vue/types/vue' {
//   interface Vue {
//     // Modal injection
//     readonly $bvModal: BvModal
//   }
// }
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    readonly $bvModal: BvModal
  }
}
