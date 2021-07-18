import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import bootstrapVue from '@/plugins/bootstrapVue'
import ToastPlugin from '@/plugins/ToastPlugin'

// todo bootstrap variables
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'
import router from './router'

createApp(App)
  .use(router)
  .use(bootstrapVue)
  // .use(ToastPlugin)
  .mount('#app')
