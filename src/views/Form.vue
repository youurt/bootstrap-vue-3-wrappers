<template>
  <b-form inline @submit.stop.prevent>
    <label for="input-with-list">Input with datalist</label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
  </b-form>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import BForm from '@/components/BForm/BForm.vue'
import BFormInput from '@/components/BFormInput/BFormInput.vue'
import BButton from '@/components/BButton/BButton.vue'
import { ref, nextTick, computed, reactive } from 'vue'

export default defineComponent({
  components: {
    BForm,
    BFormInput,
    BButton
  },

  setup() {
    const email = ref('')
    const password = ref('')
    const show = ref(true)
    const onSubmit = () => {
      alert(JSON.stringify({ email: email.value, password: password.value }))
    }
    const onReset = () => {
      email.value = ''
      password.value = ''
      show.value = false
      nextTick(() => {
        show.value = true
      })
    }
    const options = ref(['A', 'Banana', 'Grape', 'Kiwi', 'Orange'])
    const userId = ref('')
    const validation = computed(() => {
      return userId.value.length > 4 && userId.value.length < 13
    })

    watchEffect(() => {
      console.log(validation.value)
    })

    return {
      email,
      password,
      onSubmit,
      onReset,
      show,
      userId,
      validation,
      options
    }
  }
})
</script>
