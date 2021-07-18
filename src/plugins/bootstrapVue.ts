import installPlugin from '@/plugins/installPlugin'
import { App } from '@vue/runtime-core'

export default {
  install: (app: App) => {
    installPlugin(app)
  },
}
