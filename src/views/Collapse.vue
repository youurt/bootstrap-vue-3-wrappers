<template>
  <div class="m-4 p-2">
    <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in amet
        architecto debitis culpa labore modi nemo dicta, saepe ab.
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BButton from '@/components/BButton/BButton.vue'
import BCollapse from '@/components/BCollapse/BCollapse.vue'

export default defineComponent({
  name: 'Collapse',
  components: {
    BButton,
    BCollapse
  }
  // setup() {

  // },
})
</script>
