<template>
  <div class="m-4">
    <b-alert show>Default alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert
    </b-alert>

    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>

  <div class="m-4">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissHandler"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
  </div>

  <div class="m-4">
    <b-alert show variant="primary">Primary Alert</b-alert>
    <b-alert show variant="secondary">Secondary Alert</b-alert>
    <b-alert show variant="success">Success Alert</b-alert>
    <b-alert show variant="danger">Danger Alert</b-alert>
    <b-alert show variant="warning">Warning Alert</b-alert>
    <b-alert show variant="info">Info Alert</b-alert>
    <b-alert show variant="light">Light Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
  </div>

  <div class="m-4">
    <b-alert show variant="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </b-alert>
  </div>

  <div class="m-4">
    <b-alert show variant="primary"
      ><a href="#" class="alert-link">Primary Alert</a></b-alert
    >
    <b-alert show variant="secondary"
      ><a href="#" class="alert-link">Secondary Alert</a></b-alert
    >
    <b-alert show variant="success"
      ><a href="#" class="alert-link">Success Alert</a></b-alert
    >
    <b-alert show variant="danger"
      ><a href="#" class="alert-link">Danger Alert</a></b-alert
    >
    <b-alert show variant="warning"
      ><a href="#" class="alert-link">Warning Alert</a></b-alert
    >
    <b-alert show variant="info"
      ><a href="#" class="alert-link">Info Alert</a></b-alert
    >
    <b-alert show variant="light"
      ><a href="#" class="alert-link">Light Alert</a></b-alert
    >
    <b-alert show variant="dark"
      ><a href="#" class="alert-link">Dark Alert</a></b-alert
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from 'vue'
import BButton from '@/components/BButton/BButton.vue'
import BAlert from '@/components/BAlert/BAlert.vue'
export default defineComponent({
  name: 'Alert',
  components: {
    BAlert,
    BButton
  },
  setup() {
    const showDismissibleAlert = ref(false)
    const dismissCountDown = ref(0)
    const dismissSecs = ref(5)

    const showAlert = () => {
      dismissCountDown.value = dismissSecs.value
    }
    const countDownChanged = (counter: number) => {
      dismissCountDown.value = counter
    }

    const dismissHandler = () => {
      dismissCountDown.value = 0
    }

    return {
      dismissCountDown,
      showAlert,
      countDownChanged,
      dismissHandler,
      showDismissibleAlert
    }
  }
})
</script>
