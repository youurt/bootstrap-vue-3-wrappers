<template>
  <b-container class="m-5">
    <b-overlay :show="show">
      <b-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
        <b-card-text
          >Laborum consequat non elit enim exercitation cillum.</b-card-text
        >
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button>
      </b-card>
    </b-overlay>
    <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BOverlay from '@/components/BOverlay/BOverlay.vue'
import BCard from '@/components/BCard/BCard.vue'
import BButton from '@/components/BButton/BButton.vue'
import BContainer from '@/components/BContainer/BContainer.vue'

export default defineComponent({
  name: 'Overlay',
  components: {
    BOverlay,
    BCard,
    BButton,
    BContainer
  },
  setup() {
    console.log('obverlay')

    const show = ref(false)

    const disabledHandler = () => {
      console.log(show.value)
      show.value = !show.value
    }

    return { show, disabledHandler }
  }
})
</script>
