import Toast from '@/common/Toast.vue'
import { App, createApp } from 'vue'

export interface BaseProps {
  closeToast: (index: number) => void
  toastState: Toast
}

export interface ElValue {
  container: Element
  app: App
}

export interface Toast {
  [key: number]: ElValue
}

const install = (app: App) => {
  let index = 0

  const unmountApp = (indexNr: number) => {
    baseProps.toastState[indexNr].app.unmount()
  }

  const removeFromDocument = (indexNr: number) => {
    document
      .getElementById('app')!
      .firstChild!.removeChild(baseProps.toastState[indexNr].container)
  }

  const deleteFromObject = (indexNr: number) => {
    delete baseProps.toastState[indexNr]
  }

  const baseProps: BaseProps = {
    closeToast: (indexNr: number) => {
      if (Object.keys(baseProps.toastState).includes(indexNr.toString())) {
        unmountApp(indexNr)
        removeFromDocument(indexNr)
        deleteFromObject(indexNr)
      }
    },
    toastState: {},
  }

  interface ToastParams {
    title: string
    variant: string
    toaster: string
    autoHideDelay: number
    appendToast: boolean
  }

  // show Toast
  const toast = (msg: string, toastPrams?: ToastParams) => {
    index++

    const props = { ...baseProps, msg, ...toastPrams, index }

    // create a dom container and mount th Toast.vue
    const container = document.createElement('div')
    container.setAttribute('id', `ToastPlug-${index}`)
    document.getElementById('app')?.firstChild!.appendChild(container)

    const toastApp = createApp(Toast, props)
    toastApp.mount(container)

    baseProps.toastState[index] = { container: container, app: toastApp }
  }

  // set 'toast()' and 'close()' globally
  app.config.globalProperties.$bvToast = {}
  app.config.globalProperties.$bvToast.toast = toast
  app.config.globalProperties.$bvToast.closeToast = baseProps.closeToast
}

export default install
