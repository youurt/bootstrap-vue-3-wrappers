<template>
  <component
    :is="'div'"
    :class="['modal-body', isbodyTextVariant, isBodyBdVariant, bodyClass]"
  >
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData"
      ><slot :name="name" v-bind="slotData"
    /></template>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalBody',
  props: {
    isbodyTextVariant: {
      type: String
    },
    isBodyBdVariant: {
      type: String
    },
    bodyClass: {
      type: [Array, Object, String]
    }
  }
})
</script>
