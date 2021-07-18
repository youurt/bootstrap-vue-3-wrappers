<template>
  <div class="input-group">
    <div class="custom-file" style="outline: none;">
      <input
        type="file"
        class="form-control custom-file-input"
        placeholder="sometext"
        id="inputGroupFile02"
        style="z-index: -5; outline: none;"
        @focus="focusHandler"
        @change="changeHander"
      />
      <label class="custom-file-label" :style="style" for="inputGroupFile02">
        <span class="d-block form-file-text" style="pointer-events: none;">
          {{ inputDataName ? inputDataName : placeholder }}
        </span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

export default defineComponent({
  name: 'BFormFile',

  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const isInvalid = ref(true)
    const boxShadowValue = ref('')
    const isFocused = ref(false)
    const inputDataName = ref('')

    const focusHandler = () => {
      isFocused.value = !isFocused.value
    }

    const changeHander = (e: HTMLInputEvent) => {
      e.target.files!.length > 0 &&
        (inputDataName.value = e.target.files![0]!.name)
    }

    watchEffect(() => {
      inputDataName.value && (isInvalid.value = !isInvalid.value)
    })

    const style = computed(() => {
      return {
        'border-color': isInvalid.value ? '#dc3545' : '#28a745',
        'box-shadow': isFocused.value
          ? '0 0 0 0.2rem rgb(220 53 69 / 25%)'
          : null
      }
    })

    return {
      isInvalid,
      focusHandler,
      boxShadowValue,
      style,
      changeHander,
      inputDataName
    }
  }
})
</script>

<style lang="scss" scoped>
.is-invalid {
  border-color: #dc3545;
}

.custom-file {
  display: inline-block;
  margin-bottom: 0;

  .custom-file-input {
    position: relative;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
  }
}

.custom-file-input {
  z-index: 2;
  margin: 0;
  opacity: 0;
}

.custom-file-label {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px 4px 0.25rem 0.25rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  bottom: -8px;
  box-sizing: border-box;
  color: #495057;
  display: inline-block;

  font-weight: 400;
  height: calc(1.5em + 0.75rem + 2px);
  left: 0px;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  overflow: hidden auto;
  overflow-x: hidden;
  padding: 0.375rem 0.75rem;
  position: absolute;
  right: 0px;
  text-align: left;
  top: 0px;
  transition: background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  white-space: nowrap;
  z-index: 1;

  ::after {
    background-color: #e9ecef;

    border-left: inherit;
    border-radius: 0px 0.25rem 0.25rem 0px;
    bottom: 0px;
    color: #495057;
    content: 'Browse';
    display: block;
    height: calc(1.5em + 0.75rem);
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 3;
  }
}
</style>
