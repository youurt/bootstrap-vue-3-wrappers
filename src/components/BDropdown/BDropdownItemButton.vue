<template>
  <b-button
    role="menuitem"
    :class="['dropdown-item', isActive]"
    :disabled="isDisabled"
    ><slot
  /></b-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBdropdownItemController } from '@/components/BDropdown/BDropdownController'

export default defineComponent({
  name: 'BDropdownItemButton',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isActive, isDisabled } = useBdropdownItemController(props)

    return { isActive, isDisabled }
  }
})
</script>
