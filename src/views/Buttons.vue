<template>
  <div class="m-4 p-2">
    <b-button class="m-2" to="home">
      Router-Link-Support (change the 'to' attr)
    </b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2">Button</b-button>
    <b-button class="m-2" variant="danger">Button</b-button>
    <b-button class="m-2" variant="success">Button</b-button>
    <b-button class="m-2" variant="outline-primary">Button</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2">I am a Button</b-button>
    <b-button class="m-2" href="#">I am a Link</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" size="sm">Small Button</b-button>
    <b-button class="m-2">Default Button</b-button>
    <b-button class="m-2" size="lg">Large Button</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" variant="primary">Primary</b-button>
    <b-button class="m-2" variant="secondary">Secondary</b-button>
    <b-button class="m-2" variant="success">Success</b-button>
    <b-button class="m-2" variant="danger">Danger</b-button>
    <b-button class="m-2" variant="warning">Warning</b-button>
    <b-button class="m-2" variant="info">Info</b-button>
    <b-button class="m-2" variant="light">Light</b-button>
    <b-button class="m-2" variant="dark">Dark</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" variant="outline-primary">Primary</b-button>
    <b-button class="m-2" variant="outline-secondary">Secondary</b-button>
    <b-button class="m-2" variant="outline-success">Success</b-button>
    <b-button class="m-2" variant="outline-danger">Danger</b-button>
    <b-button class="m-2" variant="outline-warning">Warning</b-button>
    <b-button class="m-2" variant="outline-info">Info</b-button>
    <b-button class="m-2" variant="outline-light">Light</b-button>
    <b-button class="m-2" variant="outline-dark">Dark</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" variant="link">Link</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" block variant="primary">Block Level Button</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" pill>Button</b-button>
    <b-button class="m-2" pill variant="primary">Button</b-button>
    <b-button class="m-2" pill variant="outline-secondary">Button</b-button>
    <b-button class="m-2" pill variant="success">Button</b-button>
    <b-button class="m-2" pill variant="outline-danger">Button</b-button>
    <b-button class="m-2" pill variant="info">Button</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" squared>Button</b-button>
    <b-button class="m-2" squared variant="primary">Button</b-button>
    <b-button class="m-2" squared variant="outline-secondary">Button</b-button>
    <b-button class="m-2" squared variant="success">Button</b-button>
    <b-button class="m-2" squared variant="outline-danger">Button</b-button>
    <b-button class="m-2" squared variant="info">Button</b-button>
  </div>

  <div class="m-4 p-2">
    <b-button class="m-2" disabled size="lg" variant="primary"
      >Disabled</b-button
    >
    <b-button class="m-2" disabled size="lg">Also Disabled</b-button>
  </div>

  <div class="m-4 p-2">
    <h5>Pressed and un-pressed state</h5>
    <b-button class="m-2" :pressed="true" variant="success"
      >Always Pressed</b-button
    >
    <b-button class="m-2" :pressed="false" variant="success"
      >Not Pressed</b-button
    >
  </div>

  <div class="m-4 p-2">
    <h5 class="mt-3">Toggleable Button [TODO]</h5>
  </div>

  <div class="m-4 p-2">
    <h5 class="mt-3">Button Group [TODO]</h5>

    <b-button-group>
      <b-button variant="success">Button1</b-button>
      <b-button variant="success">Button2</b-button>
      <b-button variant="success">Button3</b-button>
    </b-button-group>
  </div>

  <div class="m-4 p-2">
    <div>
      <b-button-group>
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group size="sm">
        <b-button>Left</b-button>
        <b-button>Middle</b-button>
        <b-button>Right</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group size="lg">
        <b-button>Left</b-button>
        <b-button>Middle</b-button>
        <b-button>Right</b-button>
      </b-button-group>
    </div>
  </div>

  <div class="m-4 p-2">
    <b-button-group vertical>
      <b-button>Top</b-button>
      <b-button>Middle</b-button>
      <b-button>Bottom</b-button>
    </b-button-group>
    <h5 class="mt-3">Button Group ==> BDropdown todo [TODO]</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BButton from '@/components/BButton/BButton.vue'
import BButtonGroup from '@/components/BButtonGroup/BButtonGroup.vue'

export default defineComponent({
  name: 'Buttons',
  components: {
    BButton,
    BButtonGroup
  }
  // setup() {
  // },
})
</script>
