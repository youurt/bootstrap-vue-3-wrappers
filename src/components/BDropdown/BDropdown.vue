<template>
  <div
    :class="[
      'dropdown',
      'b-dropdown',
      'btn-gouup',
      isDropup,
      isDropright,
      isDropleft
    ]"
  >
    <b-button
      class="dropdown-toggle"
      :id="`${id}__BV_toggle_`"
      aria-haspopup="true"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :variant="variant"
      :size="size"
    >
      <slot name="button-content">
        {{ $attrs['text'] }}
      </slot>
    </b-button>
    <ul
      :class="['dropdown-menu', isRight]"
      aria-labelledby="dropdownMenuButton1"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBDropdownController } from '@/components/BDropdown/BDropdownController'

export default defineComponent({
  name: 'BDropdown',
  props: {
    id: {
      type: String
    },
    variant: {
      type: String,
      default: 'secondary'
    },
    right: {
      type: Boolean,
      default: false
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  setup(props) {
    const {
      addedStyle,
      isDropup,
      isDropright,
      isDropleft,
      isRight
    } = useBDropdownController(props)

    return { addedStyle, isDropup, isDropright, isDropleft, isRight }
  }
})
</script>
