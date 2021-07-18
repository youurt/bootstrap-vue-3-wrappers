<template>
  <div class="form-check">
    <input
      v-model="updateModelValue"
      class="form-check-input"
      type="checkbox"
      v-bind="$attrs"
    />
    <label class="form-check-label" :for="$attrs['id']">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watchEffect,
  computed,
  Events,
  onMounted,
  ref
} from 'vue'

export default defineComponent({
  name: 'BFormCheckbox',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    // const someval = computed(() => {
    //   return !props.modelValue
    //     ? ctx.attrs['unchecked-value']
    //     : ctx.attrs['value']
    // })

    const updateModelValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        ctx.emit('update:modelValue', value)
      }
    })

    // const state = ref('')

    // onMounted(() => {
    //   state.value = props.modelValue as string
    // })

    // const emitValue = (e: Event) => {
    //   const target = e.target as HTMLInputElement
    //   // console.log(target.value)

    //   console.log(props.modelValue, '#')
    //   // console.log(e.target.value)
    //   ctx.emit('update:modelValue', target.value)
    // }

    return { updateModelValue }
  }
})
</script>
