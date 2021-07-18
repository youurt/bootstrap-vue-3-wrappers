<template>
  <component :is="tag" :class="[isInline, isTextVariant]" v-bind="$attrs"
    ><slot
  /></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBFormTextHook from '@/components/BForm/BFormTextProps'

export default defineComponent({
  name: 'BFormText',
  props: {
    tag: {
      type: String,
      default: 'small'
    },
    textVariant: {
      type: String,
      defualt: 'muted'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isTextVariant, isInline } = useBFormTextHook(props)

    return { isInline, isTextVariant }
  }
})
</script>
