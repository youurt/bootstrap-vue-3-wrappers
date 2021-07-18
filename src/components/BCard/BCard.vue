<template>
  <component :is="tag" :class="['card']">
    <img
      v-if="imgTop"
      :src="$attrs['img-src']"
      :class="['card-img-bottom']"
      alt="Image"
    />
    <b-card-body>
      <h5 v-if="$attrs.title" class="card-title">{{ $attrs.title }}</h5>
      <h6 v-if="$attrs['sub-title']" class="card-subtitle mb-2 text-muted">
        {{ $attrs['sub-title'] }}
      </h6>
      <slot></slot>
    </b-card-body>
    <img
      v-if="imgBottom"
      :src="$attrs['img-src']"
      :class="['card-img-bottom']"
      alt="Image"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBColController from '@/components/BCard/BCardController'

export default defineComponent({
  name: 'BCard',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, ctx) {
    const { imgTop, imgBottom } = useBColController(ctx)

    return {
      imgTop,
      imgBottom
    }
  }
})
</script>
