<template>
  <div class="m-4 p-2">
    <b-button class="m-2" v-b-modal.modal-1
      >Launch demo modal with custom directive (modifier)</b-button
    >
    <b-button class="m-2" v-b-modal="'modal-1'"
      >Launch demo modal with custom directive (value)</b-button
    >

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" v-b-modal.modal-xl variant="primary"
      >xl modal</b-button
    >
    <b-button class="m-2" v-b-modal.modal-lg variant="primary"
      >lg modal</b-button
    >
    <b-button class="m-2" v-b-modal.modal-sm variant="primary"
      >sm modal</b-button
    >

    <b-modal id="modal-xl" size="xl" title="Extra Large Modal"
      >Hello Extra Large Modal!</b-modal
    >
    <b-modal id="modal-lg" size="lg" title="Large Modal"
      >Hello Large Modal!</b-modal
    >
    <b-modal id="modal-sm" size="sm" title="Small Modal"
      >Hello Small Modal!</b-modal
    >
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-tall>Launch overflowing modal</b-button>

    <b-modal id="modal-tall" title="Overflowing Content">
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-scrollable>Launch scrolling modal</b-button>

    <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-center>Launch centered modal</b-button>

    <b-modal id="modal-center" centered title="BootstrapVue">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" v-b-modal.modal-color>Variants of modal</b-button>

    <b-modal
      id="modal-color"
      :header-bg-variant="'dark'"
      :header-text-variant="'secondary'"
      :body-bg-variant="'warning'"
      :body-text-variant="'dark'"
      :footer-bg-variant="'info'"
      :footer-text-variant="'light'"
      title="BootstrapVue"
    >
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-no-backdrop>Open modal (Hide Backdrop)</b-button>

    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      content-class="shadow"
      title="BootstrapVue"
    >
      <p class="my-2">
        We've added the utility class <code>'shadow'</code>
        to the modal content for added effect.
      </p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-no-backdrop-no-fade
      >Open modal (Hide Backdrop + No Fade)</b-button
    >

    <b-modal
      id="modal-no-backdrop-no-fade"
      hide-backdrop
      no-fade
      content-class="shadow"
      title="BootstrapVue"
    >
      <p class="my-2">
        We've added the utility class <code>'shadow'</code>
        to the modal content for added effect.
      </p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button class="mt-2" v-b-modal.modal-footer-sm
      >Small Footer Buttons</b-button
    >
    <b-button class="mt-2" v-b-modal.modal-footer-lg
      >Large Footer Buttons</b-button
    >

    <b-modal id="modal-footer-sm" title="BootstrapVue" button-size="sm">
      <p class="my-2">This modal has small footer buttons</p>
    </b-modal>

    <b-modal id="modal-footer-lg" title="BootstrapVue" button-size="lg">
      <p class="my-2">This modal has large footer buttons</p>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-slots>Slots</b-button>

    <b-modal id="modal-slots">
      <template #modal-title>
        <h1>Here might be a page title</h1>
      </template>
      <template #modal-header-close>
        x
      </template>
    </b-modal>
  </div>

  <div class="m-4 p-2">
    <b-button v-b-modal.modal-multi-1>Open First Modal</b-button>

    <b-modal
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-only
      no-stacking
    >
      <p class="my-2">First Modal</p>
      <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-2" title="Second Modal" ok-only>
      <p class="my-2">Second Modal</p>
      <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BButton from '@/components/BButton/BButton.vue'
import BModal from '@/components/BModal/BModal.vue'

export default defineComponent({
  name: 'Modal',
  components: {
    BButton,
    BModal
  }

  // setup() {

  // }
})
</script>
