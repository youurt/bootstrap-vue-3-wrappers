<template>
  <transition :name="fade ? 'fade' : null">
    <div
      v-if="isShow"
      aria-live="polite"
      aria-atomic="true"
      :class="['alert', `alert-${variant}`, isAnimateShowFade]"
    >
      <slot name="default" />
      <slot name="dissmis">
        <button
          v-if="dismissible"
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="dissmissHandler"
        />
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAlertCountdown from '@/components/BAlert/helpers/BAlertCountdown'
import useDissmissHandler from '@/components/BAlert/helpers/BAlertDissmissHandler'
import useBAlertController from '@/components/BAlert/BAlertController'

export default defineComponent({
  name: 'BAlert',
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    show: {
      type: [Boolean, Number, String],
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const { myInterval } = useAlertCountdown(props, ctx)
    const { isShow, isAnimateShowFade, isFade } = useBAlertController(props)
    const { dissmissHandler } = useDissmissHandler(myInterval, props, ctx)

    return { dissmissHandler, isShow, isAnimateShowFade, isFade }
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
