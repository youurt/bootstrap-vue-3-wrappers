<template>
  <li>
    <a :class="['dropdown-item', isActive, isDisabled]" v-bind="$attrs"
      ><slot
    /></a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBdropdownItemController } from '@/components/BDropdown/BDropdownController'

export default defineComponent({
  name: 'BDropdownItem',
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
