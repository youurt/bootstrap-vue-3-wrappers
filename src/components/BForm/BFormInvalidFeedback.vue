<template>
  <component :is="tag" :class="[isInvalid, isTooltipInvalid]" v-bind="$attrs"
    ><slot
  /></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBFormController from '@/components/BForm/BFormController'

export default defineComponent({
  name: 'BFormInvalidFeedback',
  props: {
    state: {
      type: Boolean,
      default: false
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
    const { isInvalid, isTooltipInvalid } = useBFormController(props)

    return { isInvalid, isTooltipInvalid }
  }
})
</script>
