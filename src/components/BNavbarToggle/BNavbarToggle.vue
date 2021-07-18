<template>
  <button
    @click="collapseHandler"
    type="button"
    :aria-label="label"
    :class="['navbar-toggler', collapseStatus, isDisabled]"
    :disabled="isDisabled"
    :aria-expanded="toggleStatus"
    :style="{ 'overflow-anchor': 'none' }"
    :aria-controls="target"
    data-bs-toggle="collapse"
    :data-bs-target="`#${target}`"
  >
    <span class="navbar-toggler-icon" />
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useBNavbarToggleController from '@/components/BNavbarToggle/BNavbarToggleController'
import { Target } from '@/common/types/commonTypes'
import { useIsDisabled } from '@/common/hooks/commonComputedHooks'

export default defineComponent({
  name: 'BNavbarToggle',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    target: {
      type: String as PropType<Target>
    }
  },
  setup(props) {
    const {
      toggleStatus,
      collapseStatus,
      collapseHandler
    } = useBNavbarToggleController()

    const { isDisabled } = useIsDisabled(props.disabled)

    return {
      isDisabled,
      collapseHandler,
      toggleStatus,
      collapseStatus
    }
  }
})
</script>
