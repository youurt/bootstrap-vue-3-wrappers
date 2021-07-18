<template>
  <b-button id="button-1" class="m-5" @click="toastHandler"
    >show toast</b-button
  >
  <!-- <b-button id="button-1" class="m-5" @click="closeToastHandler"
    >CLOSE toast</b-button
  > -->
</template>

<script>
import BButton from '@/components/BButton/BButton.vue'
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  components: { BButton },
  name: 'Toast',

  setup() {
    const instance = getCurrentInstance()
    const toastHandler = () => {
      instance?.appContext.config.globalProperties.$bvToast.toast(
        '###Sie haben nicht die erforderliche Berechtigung, um diese Aktion auszuführen.',
        {
          title: '###Hinweis',
          variant: 'danger',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000,
          appendToast: true,
        }
      )
    }

    // const closeToastHandler = () => {
    //   instance?.appContext.config.globalProperties.$bvToast.closeToast()
    // }

    return { toastHandler }
  },
})
</script>
