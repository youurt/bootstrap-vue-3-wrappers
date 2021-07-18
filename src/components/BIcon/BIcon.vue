<template>
  <i
    :class="['bi', `bi-${icon}`, textVariant]"
    :style="fontScaleCalc"
    v-bind="$attrs"
  ></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBIconController from '@/components/BIcon/BIconController'

export default defineComponent({
  name: 'BIcon',
  inheritAttrs: false,
  props: {
    icon: {
      type: String
    },
    variant: {
      type: String
    },
    fontScale: {
      type: Number
    }
  },
  setup(props) {
    const { fontScaleCalc, textVariant } = useBIconController(props)

    return {
      fontScaleCalc,
      textVariant
    }
  }
})
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');
</style>
