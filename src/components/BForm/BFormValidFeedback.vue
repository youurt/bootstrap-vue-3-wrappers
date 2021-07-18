<template>
  <component :is="tag" :class="[isValid, isTooltipValid]" v-bind="$attrs"
    ><slot
  /></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBFormController from '@/components/BForm/BFormController'

export default defineComponent({
  name: 'BFormValidFeedback',
  props: {
    state: {
      type: Boolean,
      default: null
    },
    forceShow: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    tooltip: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isValid, isTooltipValid } = useBFormController(props)

    return {
      isValid,
      isTooltipValid
    }
  }
})
</script>
