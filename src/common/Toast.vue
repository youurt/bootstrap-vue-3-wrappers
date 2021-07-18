<template>
  <transition name="fade" mode="out-in">
    <component
      :is="'div'"
      v-if="show"
      :key="index"
      :id="index"
      :class="['toast-container', positionHandler, 'mt-3']"
    >
      <div
        :class="['toast', showToast, `b-toast-${variant}`]"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header ">
          <!-- <img src="" class="rounded me-2" alt="" /> -->
          <strong class="me-auto">{{ title }}</strong>
          <!-- <small>11 mins ago</small> -->
          <button
            type="button"
            class="btn-close"
            @click="closeToast(index)"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          <slot> {{ msg }}</slot>
        </div>
      </div>
    </component>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  PropType,
} from 'vue'
import { Toast } from '@/plugins/ToastPlugin'
import { Toast as BSToast } from 'bootstrap'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
    closeToast: {
      type: Function,
      default: () => ({}),
    },
    title: {
      type: String,
    },
    variant: {
      type: String,
      default: 'secondary',
    },
    toaster: {
      type: String,
    },
    autoHideDelay: {
      type: Number,
      default: 2000,
    },
    appendToast: {
      type: Boolean,
    },
    index: {
      type: Number,
      default: 0,
    },
    changeIndex: {
      type: Number,
      default: 0,
    },
    toastState: {
      type: Object as PropType<Toast>,
    },
  },
  name: 'Toast',

  setup(props) {
    const innerTimeout = ref(0)
    const show = ref(true)

    onMounted(() => {
      toClearTimeout()
      console.log(props.toastState, 'state')

      if (props.autoHideDelay) {
        try {
          innerTimeout.value = setTimeout(() => {
            props.closeToast(props.index)
            show.value = !show.value
          }, props.autoHideDelay)
        } catch (e) {
          console.error(e)
        }
      }
    })

    onUnmounted(() => {
      console.log(props.toastState!, 'stateunmount')

      toClearTimeout()
    })

    const toClearTimeout = () => {
      if (innerTimeout.value) {
        try {
          clearTimeout(innerTimeout.value)
        } catch (e) {
          console.error(e)
        }
      }
    }

    const showToast = computed(() => {
      return show.value ? 'show' : null
    })

    interface PositionTypes {
      [key: string]: string
    }

    const positionHandler = computed(() => {
      const positions: PositionTypes = {
        'b-toaster-top-right': 'top-0 end-0',
        'b-toaster-top-left': 'top-0 start-0',
        'b-toaster-top-center': 'top-0 start-50 translate-middle-x',
        'b-toaster-bottom-right': 'bottom-0 end-0',
        'b-toaster-bottom-left': 'bottom-0 start-0',
        'b-toaster-bottom-center': 'bottom-0 start-50 translate-middle-x',
      }

      return positions[props.toaster!] || 'top-0 end-0'
    })

    return { positionHandler, showToast, show }
  },
})
</script>

<style lang="scss" scoped>
.b-toast-warning {
  background-color: rgba(255, 249, 231, 0.85);
  border-color: rgba(255, 238, 186, 0.85);
  color: #856404;
}

.b-toast-danger {
  color: #721c24;
  background-color: rgba(248, 215, 218, 0.85);
  border-bottom-color: rgba(245, 198, 203, 0.85);
}

.b-toast-primary {
  color: #004085;
  background-color: rgba(204, 229, 255, 0.85);
  border-bottom-color: rgba(184, 218, 255, 0.85);
}

.b-toast-secondary {
  color: #383d41;
  background-color: rgba(226, 227, 229, 0.85);
  border-bottom-color: rgba(214, 216, 219, 0.85);
}

.b-toast-success {
  color: #155724;
  background-color: rgba(212, 237, 218, 0.85);
  border-bottom-color: rgba(195, 230, 203, 0.85);
}

.b-toast-info {
  color: #0c5460;
  background-color: rgba(209, 236, 241, 0.85);
  border-bottom-color: rgba(190, 229, 235, 0.85);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
