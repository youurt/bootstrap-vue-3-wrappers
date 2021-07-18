<template>
  <div class="m-4 p-2 bg-primary">
    <b-form-input
      v-model="datavalues.name"
      placeholder="Enter your name"
    ></b-form-input>
    <div class="mt-2">Value: {{ datavalues.name }}</div>
  </div>

  <div class="m-4 p-2 bg-success">
    <b-container fluid>
      <b-row class="my-1" v-for="type in types" :key="type">
        <b-col sm="3">
          <label :for="`type-${type}`"
            >Type <code>{{ type }}</code
            >:</label
          >
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2 bg-primary">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Small:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Default:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-default"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-large">Large:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2 bg-success">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">No State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-none"
            :state="null"
            placeholder="No validation"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-valid">Valid State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-valid"
            :state="true"
            placeholder="Valid input"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Invalid State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-invalid"
            :state="false"
            placeholder="Invalid input"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2 bg-primary">
    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-invalid">Invalid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-live"
          v-model="name"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter your name (at least >2 chars)"
          trim
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import BFormInput from '@/components/BFormInput/BFormInput.vue'
import { ref } from 'vue'
import BContainer from '@/components/BContainer/BContainer.vue'
import BCol from '@/components/BCol/BCol.vue'
import BRow from '@/components/BRow/BRow.vue'

export default defineComponent({
  name: 'Input',
  components: {
    BFormInput,
    BContainer,
    BCol,
    BRow
  },
  setup() {
    const datavalues = reactive({
      name: 'aka@cosynus.de',
      password: 'aka@cosynus.de',
      client: 'DE21010002',
      rememberMe: true
    })

    const text = ref('')
    const name = ref('')
    const types = ref([
      'text',
      'number',
      'email',
      'password',
      'search',
      'url',
      'tel',
      'date',
      'time',
      'range',
      'color'
    ])

    const nameState = computed(() => {
      return name.value.length > 2 ? true : false
    })

    return { text, nameState, name, types, datavalues }
  }
})
</script>
