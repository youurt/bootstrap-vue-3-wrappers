<template>
  <template
    :class="['modal', isNoFade, modalClass]"
    :id="id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :data-bs-backdrop="isNoCloseOnBackdrop"
    :data-bs-keyboard="isNoCloseOnEsc"
    :data-bs-focus="isNoEnforeceFocus"
  >
    <div
      :class="[
        'modal-dialog',
        dialogClass,
        modalSize,
        isScrollable,
        isCentered
      ]"
    >
      <div :class="['modal-content', contentClass]">
        <div
          v-if="!hideHeader"
          :class="[
            'modal-header',
            isHeaderTextVariant,
            isHeaderBgVariant,
            isHeaderBorderVariant,
            headerClass
          ]"
        >
          <slot name="modal-header">
            <slot name="modal-title">
              <component
                :is="titleTag"
                :class="['modal-title', hasTitleSrOnly, titleClass]"
                id="exampleModalLabel"
              >
                {{ showTitleContent }}
                <span v-html="showTitleHtmlContent"></span>
              </component>
            </slot>
            <slot name="modal-header-close">
              <b-button
                v-if="!hideHeaderClose"
                data-bs-dismiss="modal"
                class="btn-close"
                :aria-label="headerCloseLabel"
                :variant="headerCloseVariant"
              ></b-button>
            </slot>
          </slot>
        </div>

        <modal-body
          :is-body-text-variant="isbodyTextVariant"
          :is-body-bd-variant="isBodyBdVariant"
          :body-class="bodyClass"
        >
          <slot name="default"> </slot>
        </modal-body>

        <!-- <div
          :class="['modal-body', isbodyTextVariant, isBodyBdVariant, bodyClass]"
        >
          <slot name="default"> </slot>
        </div> -->

        <div
          v-if="!hideFooter"
          :class="[
            'modal-footer',
            footerClass,
            isFooterTextVariant,
            isFooterBorderVariant,
            isFooterBgVariant
          ]"
        >
          <slot name="modal-footer">
            <slot v-if="!okOnly" name="modal-cancel">
              <b-button
                data-bs-dismiss="modal"
                :variant="cancelVariant"
                :disabled="cancelDisabled || busy"
                :size="buttonSize"
              >
                {{ showCancelContent }}
                <span v-html="showCancelHtmlContent"></span>
              </b-button>
            </slot>
            <slot name="modal-ok">
              <b-button
                :disabled="isOkDisabled || busy"
                data-bs-dismiss="modal"
                class="btn btn-primary"
                :variant="okVariant"
              >
                {{ showOkContent }}
                <span v-html="showOkHtmlContent"></span>
              </b-button>
            </slot>
          </slot>
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useBModalController from '@/components/BModal/BModalController'

export default defineComponent({
  name: 'BModal',
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    titleTag: {
      type: String,
      default: 'h5'
    },
    titleSrOnly: {
      type: Boolean,
      default: false
    },
    titleHtml: {
      type: String
    },
    titleClass: {
      type: [Array, Object, String]
    },
    size: {
      type: String,
      default: 'md'
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    okVariant: {
      type: String,
      default: 'primary'
    },
    okTitle: {
      type: String,
      default: 'OK'
    },
    okTitleHtml: {
      type: String
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noCloseOnEsc: {
      type: Boolean,
      default: false
    },
    noEnforceFocus: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    modalClass: {
      type: [Array, Object, String]
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    headerTextVariant: {
      type: String
    },
    headerCloseVariant: {
      type: String
    },
    headerCloseLabel: {
      type: String,
      default: 'Close'
    },
    headerClass: {
      type: [Array, Object, String]
    },
    headerBorderVariant: {
      type: String
    },
    headerBgVariant: {
      type: String
    },
    footerTextVariant: {
      type: String
    },
    footerClass: {
      type: [Array, Object, String]
    },
    footerBorderVariant: {
      type: String
    },
    footerBgVariant: {
      type: String
    },
    dialogClass: {
      type: [Array, Object, String]
    },
    contentClass: {
      type: [Array, Object, String]
    },
    centered: {
      type: Boolean,
      default: false
    },
    cancelVariant: {
      type: String,
      default: 'secondary'
    },
    cancelTitleHtml: {
      type: String
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String
    },
    busy: {
      type: Boolean,
      default: false
    },
    bodyTextVariant: {
      type: String
    },
    bodyClass: {
      type: [Array, Object, String]
    },
    bodyBgVariant: {
      type: String
    },
    ariaLabel: {
      type: String
    }
  },
  setup(props) {
    const {
      hasTitleSrOnly,
      showTitleHtmlContent,
      showTitleContent,
      modalSize,
      isScrollable,
      showOkContent,
      showOkHtmlContent,
      isOkDisabled,
      isNoFade,
      isNoCloseOnBackdrop,
      isNoCloseOnEsc,
      isNoEnforeceFocus,
      isHeaderTextVariant,
      isHeaderBgVariant,
      isHeaderBorderVariant,
      isFooterTextVariant,
      isFooterBorderVariant,
      isFooterBgVariant,
      isCentered,
      showCancelContent,
      showCancelHtmlContent,
      isbodyTextVariant,
      isBodyBdVariant
    } = useBModalController(props)

    return {
      hasTitleSrOnly,
      showTitleHtmlContent,
      showTitleContent,
      modalSize,
      isScrollable,
      showOkContent,
      showOkHtmlContent,
      isOkDisabled,
      isNoFade,
      isNoCloseOnBackdrop,
      isNoCloseOnEsc,
      isNoEnforeceFocus,
      isHeaderTextVariant,
      isHeaderBgVariant,
      isHeaderBorderVariant,
      isFooterTextVariant,
      isFooterBorderVariant,
      isFooterBgVariant,
      isCentered,
      showCancelContent,
      showCancelHtmlContent,
      isbodyTextVariant,
      isBodyBdVariant
    }
  }
})
</script>
