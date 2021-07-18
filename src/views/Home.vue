<template>
  <div class="m-5">
    <b-button @click="showModal">showmodal</b-button>
  </div>
  <!-- <div class="m-2">
    <b-button @click="showHandler"> fade/unfade alert</b-button>
  </div>

  <b-alert fade class="hrf-cookie-notice" v-model="isShow">myalert</b-alert> -->

  <!-- <div class="m-4 p-2">
    <b-form-input variant="danger" :disabled="isDisabled">
      disable me</b-form-input
    >
    <div class="mt-2">Value: {{ isDisabled }}</div>
  </div>
  <div class="m-2">
    <b-button variant="primary" @click="changeDisabled"
      >toggle disabled</b-button
    >
  </div> -->
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const isShow = ref(true)

    const showHandler = () => {
      isShow.value = !isShow.value
    }

    const name = ref('')
    const state = computed(() => {
      return name.value.length >= 4
    })
    const invalidFeedback = computed(() => {
      return name.value.length > 0
        ? 'Enter at least 4 characters.'
        : 'Please enter sth.'
    })

    const isDisabled = ref(true)

    const changeDisabled = () => {
      isDisabled.value = !isDisabled.value
    }

    return {
      isDisabled,
      changeDisabled,
      name,
      state,
      invalidFeedback,
      isShow,
      showHandler
    }
  },
  data() {
    return {
      boxOne: ''
    }
  },
  methods: {
    showModal() {
      this.$bvModal.msgBoxConfirm('Are you sure?')
    }
  }

  // setup() {
  //   // const isDisabled = ref(false)
  //   // const changeDisabled = () => {
  //   //   isDisabled.value = !isDisabled.value
  //   // }
  //   // const text = ref('')
  //   // const thismdl = ref(null)
  //   // const modalShow = ref(false)
  //   // const dismissCountDown = ref(0)
  //   // const dismissSecs = ref(5)
  //   // const textState = computed(() => {
  //   //   return text.value.length > 2 ? true : false
  //   // })
  //   // const clickhandler = () => {
  //   //   thismdl.value.mymdl.toggle('#toggle-btn')
  //   // }
  //   // const onclickHandler = () => {
  //   //   modalShow.value = !modalShow.value
  //   //   // console.log(modalShow.value)
  //   // }
  //   // const showAlert = () => {
  //   //   dismissCountDown.value = dismissSecs.value
  //   // }
  //   // // const countDownChanged = (changed: number) => {
  //   // //   dismissCountDown.value = changed
  //   // // }
  //   // const dismissHandler = () => {
  //   //   dismissCountDown.value = 0
  //   //   console.log('dissmishandler', dismissCountDown.value)
  //   // }
  //   return {
  //     // textState,
  //     // text,
  //     // thismdl,
  //     // clickhandler,
  //     // modalShow,
  //     // onclickHandler,
  //     // isDisabled,
  //     // changeDisabled
  //     // dismissCountDown,
  //     // showAlert,
  //     // countDownChanged,
  //     // dismissHandler
  //   }
  // }
})
</script>
<style scoped>
.dd-icon {
  position: absolute;
  right: 0.25rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
