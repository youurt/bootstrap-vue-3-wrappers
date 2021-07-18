import BModalInterface from '@/components/BModal/BModal.interface'
import { computed } from 'vue'

const useBModalController = (props: BModalInterface) => {
  const showTitleContent = computed(() => {
    return props.titleHtml ? null : props.title
  })

  const showTitleHtmlContent = computed(() => {
    return props.titleHtml ? props.titleHtml : undefined
  })

  const showOkContent = computed(() => {
    return props.okTitleHtml ? null : props.okTitle
  })

  const showOkHtmlContent = computed(() => {
    return props.okTitleHtml ? props.okTitleHtml : undefined
  })

  const hasTitleSrOnly = computed(() => {
    return props.titleSrOnly ? 'visually-hidden' : null
  })

  const modalSize = computed(() => {
    return `modal-${props.size}`
  })

  const isScrollable = computed(() => {
    return props.scrollable ? 'modal-dialog-scrollable' : null
  })

  const isOkDisabled = computed(() => {
    return props.okDisabled ? 'disabled' : null
  })

  const isNoFade = computed(() => {
    return props.noFade ? null : 'fade'
  })

  const isNoCloseOnBackdrop = computed(() => {
    return props.noCloseOnBackdrop
      ? 'static'
      : props.hideBackdrop
      ? false
      : true
  })

  const isNoCloseOnEsc = computed(() => {
    return props.noCloseOnEsc ? false : true
  })

  const isNoEnforeceFocus = computed(() => {
    return props.noEnforceFocus ? false : true
  })

  const isHeaderTextVariant = computed(() => {
    return props.headerTextVariant ? `text-${props.headerTextVariant}` : null
  })

  const isHeaderBgVariant = computed(() => {
    return props.headerBgVariant ? `bg-${props.headerBgVariant}` : null
  })

  const isHeaderBorderVariant = computed(() => {
    return props.headerBorderVariant
      ? `border-${props.headerBorderVariant}`
      : null
  })

  const isFooterTextVariant = computed(() => {
    return props.footerTextVariant ? `text-${props.footerTextVariant}` : null
  })

  const isFooterBorderVariant = computed(() => {
    return props.footerBorderVariant
      ? `border-${props.footerBorderVariant}`
      : null
  })

  const isFooterBgVariant = computed(() => {
    return props.footerBgVariant ? `bg-${props.footerBgVariant}` : null
  })

  const isCentered = computed(() => {
    return props.centered ? 'modal-dialog-centered' : null
  })

  const showCancelContent = computed(() => {
    return props.cancelTitleHtml ? null : props.cancelTitle
  })

  const showCancelHtmlContent = computed(() => {
    return props.cancelTitleHtml ? props.cancelTitleHtml : undefined
  })

  const isbodyTextVariant = computed(() => {
    return props.bodyTextVariant ? `text-${props.bodyTextVariant}` : null
  })

  const isBodyBdVariant = computed(() => {
    return props.bodyBgVariant ? `bg-${props.bodyBgVariant}` : null
  })

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

export default useBModalController
