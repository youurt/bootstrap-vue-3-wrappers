<template>
  <div class="m-4 p-2">
    <b-card
      style="max-width: 20rem;"
      img-src="https://picsum.photos/600/300/?image=25"
      tag="article"
      class="mb-2"
      title="Card title"
      sub-title="Subtitle"
      img-bottom
      img-top
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>
      <b-button href="#" variant="primary">
        Go somewhere
      </b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BCard from '@/components/BCard/BCard.vue'
import BButton from '@/components/BButton/BButton.vue'
export default defineComponent({
  components: {
    BCard,
    BButton
  }
})
</script>
