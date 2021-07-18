<template>
  <b-dropdown
    size="lg"
    id="dropdown-2"
    text="Left"
    variant="primary"
    class="m-md-2"
  >
    <b-drop-down-item>First Action</b-drop-down-item>
    <b-drop-down-item>Second Action</b-drop-down-item>
    <b-drop-down-item>Third Action</b-drop-down-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-drop-down-item active>Active</b-drop-down-item>
    <b-drop-down-item disabled>Disabled</b-drop-down-item>
  </b-dropdown>

  <div class="m-md-2">
    <div class="mt-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
      quisquam minima quas perspiciatis in, voluptatem eligendi impedit at!
      Voluptates, ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus quisquam minima quas perspiciatis in, voluptatem eligendi
      impedit at! Voluptates, ipsa. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Doloribus quisquam minima quas perspiciatis in,
      voluptatem eligendi impedit at! Voluptates, ipsa.
    </div>
  </div>

  <b-dropdown
    id="dropdown-1"
    text="Dropdown Button"
    variant="primary"
    class="m-md-2"
    right
  >
    <template #button-content>
      Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <b-drop-down-item>First Action</b-drop-down-item>
    <b-drop-down-item>Second Action</b-drop-down-item>
    <b-drop-down-item>Third Action</b-drop-down-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-drop-down-item active>Active</b-drop-down-item>
    <b-drop-down-item disabled>Disabled</b-drop-down-item>
  </b-dropdown>

  <b-dropdown
    id="dropdown-3"
    dropup
    text="Dropup"
    variant="primary"
    class="m-md-2"
  >
    <b-drop-down-item>First Action</b-drop-down-item>
    <b-drop-down-item>Second Action</b-drop-down-item>
    <b-drop-down-item>Third Action</b-drop-down-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-drop-down-item active>Active</b-drop-down-item>
    <b-drop-down-item disabled>Disabled</b-drop-down-item>
  </b-dropdown>

  <b-dropdown
    id="dropdown-4"
    dropright
    text="Dropright"
    variant="primary"
    class="m-md-2"
  >
    <b-drop-down-item>First Action</b-drop-down-item>
    <b-drop-down-item>Second Action</b-drop-down-item>
    <b-drop-down-item>Third Action</b-drop-down-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-drop-down-item active>Active</b-drop-down-item>
    <b-drop-down-item disabled>Disabled</b-drop-down-item>
  </b-dropdown>

  <div class="d-flex flex-row-reverse">
    <b-dropdown
      id="dropdown-5"
      dropleft
      text="Dropleft"
      variant="primary"
      class="m-md-2"
    >
      <b-drop-down-item>First Action</b-drop-down-item>
      <b-drop-down-item>Second Action</b-drop-down-item>
      <b-drop-down-item>Third Action</b-drop-down-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-drop-down-item active>Active</b-drop-down-item>
      <b-drop-down-item disabled>Disabled</b-drop-down-item>
    </b-dropdown>
  </div>

  <b-dropdown
    id="dropdownbuttons"
    text="Buttons using"
    variant="primary"
    class="m-md-2"
  >
    <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
    <b-dropdown-item-button active> I'm a button active</b-dropdown-item-button>
    <b-dropdown-item-button disabled
      >I'm a button disabled</b-dropdown-item-button
    >
    <b-dropdown-item-button>I dont look like a button</b-dropdown-item-button>
  </b-dropdown>
</template>

<script lang="ts">
import BDropdown from '@/components/BDropdown/BDropdown.vue'
import BDropDownItem from '@/components/BDropdown/BDropdownItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BDropdown, BDropDownItem },
  name: 'Dropdown'
})
</script>
