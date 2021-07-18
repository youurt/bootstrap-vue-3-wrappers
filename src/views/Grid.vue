<template>
  <div class="m-4 p-2 ">
    <b-container>
      <b-row>
        <b-col class="bv-example-col">1 of 3</b-col>
        <b-col class="bv-example-col">2 of 3</b-col>
        <b-col class="bv-example-col">3 of 3</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="m-2">
        <b-col class="bv-example-col">1 of 2</b-col>
        <b-col class="bv-example-col">2 of 2</b-col>
      </b-row>

      <b-row class="m-2">
        <b-col class="bv-example-col">1 of 3</b-col>
        <b-col class="bv-example-col">2 of 3</b-col>
        <b-col class="bv-example-col">3 of 3</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <div class="w-100"></div>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="text-center m-2">
        <b-col class="bv-example-col">1 of 3</b-col>
        <b-col class="bv-example-col" cols="8">2 of 3 (wider)</b-col>
        <b-col class="bv-example-col">3 of 3</b-col>
      </b-row>

      <b-row class="text-center m-2">
        <b-col class="bv-example-col">1 of 3</b-col>
        <b-col class="bv-example-col" cols="5">2 of 3 (wider)</b-col>
        <b-col class="bv-example-col">3 of 3</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col class="bv-example-col" cols="12" md="8">cols="12" md="8"</b-col>
        <b-col class="bv-example-col" cols="6" md="4">cols="6" md="4"</b-col>
      </b-row>

      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <b-row>
        <b-col class="bv-example-col" cols="6" md="4">cols="6" md="4"</b-col>
        <b-col class="bv-example-col" cols="6" md="4">cols="6" md="4"</b-col>
        <b-col class="bv-example-col" cols="6" md="4">cols="6" md="4"</b-col>
      </b-row>

      <!-- Columns are always 50% wide, on mobile and desktop -->
      <b-row>
        <b-col class="bv-example-col" cols="6">cols="6"</b-col>
        <b-col class="bv-example-col" cols="6">cols="6"</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="bv-example-row" align-v="start">
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
      </b-row>

      <b-row class="bv-example-row" align-v="center">
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
      </b-row>

      <b-row class="bv-example-row" align-v="end">
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
      </b-row>

      <b-row class="bv-example-row" align-v="baseline">
        <b-col class="bv-example-col" style="font-size: 0.75rem;"
          >One of three columns</b-col
        >
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col" style="font-size: 1.25rem;"
          >One of three columns</b-col
        >
      </b-row>

      <b-row class="bv-example-row" align-v="stretch">
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
        <b-col class="bv-example-col">One of three columns</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="bv-example-row">
        <b-col class="bv-example-col" align-self="start"
          >One of three columns</b-col
        >
        <b-col class="bv-example-col" align-self="center"
          >One of three columns</b-col
        >
        <b-col class="bv-example-col" align-self="end"
          >One of three columns</b-col
        >
      </b-row>
      <b-row class="bv-example-row">
        <b-col class="bv-example-col" align-self="baseline"
          >One of two columns</b-col
        >
        <b-col class="bv-example-col" align-self="stretch"
          >One of two columns</b-col
        >
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="m-2" align-h="start">
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
      </b-row>

      <b-row class="m-2" align-h="center">
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
      </b-row>

      <b-row class="m-2" align-h="end">
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
      </b-row>

      <b-row class="m-2" align-h="around">
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
      </b-row>

      <b-row class="m-2" align-h="between">
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
        <b-col class="bv-example-col" cols="4">One of two columns</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="mb-3">
        <b-col fluid class="bv-example-col"
          >First in DOM, no order applied</b-col
        >
        <b-col fluid class="bv-example-col" order="5"
          >Second in DOM, with a larger order</b-col
        >
        <b-col fluid class="bv-example-col" order="1"
          >Third in DOM, with an order of 1</b-col
        >
      </b-row>

      <b-row class="mb-3">
        <b-col fluid class="bv-example-col" order="6"
          >First in DOM, with order of 6</b-col
        >
        <b-col fluid class="bv-example-col" order="1"
          >Second in DOM, with an order of 1</b-col
        >
        <b-col fluid class="bv-example-col"
          >Third in DOM, no order applied</b-col
        >
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="m-2">
        <b-col class="bv-example-col" md="4">md="4"</b-col>
        <b-col class="bv-example-col" md="4" offset-md="4"
          >md="4" offset-md="4"</b-col
        >
      </b-row>

      <b-row class="m-2">
        <b-col class="bv-example-col" md="3" offset-md="3"
          >md="3" offset-md="3"</b-col
        >
        <b-col class="bv-example-col" md="3" offset-md="3"
          >md="3" offset-md="3"</b-col
        >
      </b-row>

      <b-row class="m-2">
        <b-col class="bv-example-col" md="6" offset-md="3"
          >md="6" offset-md="3"</b-col
        >
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container>
      <b-row class="m-2">
        <b-col fluid class="bv-example-col" sm="5" md="6">sm="5" md="6"</b-col>
        <b-col
          fluid
          class="bv-example-col"
          sm="5"
          offset-sm="2"
          md="6"
          offset-md="0"
          >sm="5" offset-sm="2" md="6" offset-md="0"</b-col
        >
      </b-row>

      <b-row class="m-2">
        <b-col fluid class="bv-example-col" sm="6" md="5" lg="6"
          >sm="6" md="5" lg="6"</b-col
        >
        <b-col
          fluid
          class="bv-example-col"
          sm="6"
          md="5"
          offset-md="2"
          lg="6"
          offset-lg="0"
          >sm="6" md="5" offset-md="2" col-lg="6" offset-lg="0"</b-col
        >
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <div class=" m-2 bg-danger text-light">
      BOOTSTRAP5: renaming "ml" to "ms" and "mr" to "me"!
    </div>
    <b-container class="text-light text-center">
      <b-row class="mb-3">
        <b-col fluid md="4" class="p-3 bg-info">md="4"</b-col>
        <b-col fluid md="4" class="ms-auto p-3 bg-info">md="4" .ms-auto</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col fluid md="3" class="ms-md-auto p-3 bg-info"
          >md="3" .ms-md-auto</b-col
        >
        <b-col fluid md="3" class="ms-md-auto p-3 bg-info"
          >md="3" .ms-md-auto</b-col
        >
      </b-row>

      <b-row>
        <b-col fluid cols="auto" class="me-auto p-3 bg-info"
          >cols="auto" .me-auto</b-col
        >
        <b-col fluid cols="auto" class="p-3 bg-info">cols="auto"</b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4" p-2>
    <b-container>
      <b-row>
        <b-col fluid class="bv-example-col" sm="9">
          Level 1: sm="9"
          <b-row>
            <b-col fluid class="bv-example-col" cols="8" sm="6"
              >Level 2: cols="8" sm="6"</b-col
            >
            <b-col fluid class="bv-example-col" cols="4" sm="6"
              >Level 2: cols="4" sm="6"</b-col
            >
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="m-4 p-2">
    <b-container class="mb-3">
      <b-row cols="2">
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
      </b-row>
    </b-container>

    <b-container class="mb-3">
      <b-row cols="3">
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
      </b-row>
    </b-container>

    <b-container class="mb-3">
      <b-row cols="4">
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row cols="4">
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
        <b-col class="bv-example-col" cols="6">Column</b-col>
        <b-col class="bv-example-col">Column</b-col>
      </b-row>
    </b-container>
  </div>

  <b-container>
    <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6">
      <b-col class="bv-example-col">Column</b-col>
      <b-col class="bv-example-col">Column</b-col>
      <b-col class="bv-example-col">Column</b-col>
      <b-col class="bv-example-col">Column</b-col>
      <b-col class="bv-example-col">Column</b-col>
      <b-col class="bv-example-col">Column</b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BContainer from '@/components/BContainer/BContainer.vue'
import BCol from '@/components/BCol/BCol.vue'
import BRow from '@/components/BRow/BRow.vue'

export default defineComponent({
  name: 'Grid',
  components: {
    BContainer,
    BCol,
    BRow
  }
})
</script>

<style scoped>
.bv-example-col {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}

.bv-example-row {
  min-height: 10rem;
  background-color: rgba(255, 0, 0, 0.1);
}
</style>
