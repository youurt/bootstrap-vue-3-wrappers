interface BModalInterface {
  title?: string
  titleHtml?: string
  titleSrOnly: boolean
  scrollable: boolean
  size: string
  okTitle: string
  okTitleHtml?: string
  okDisabled: boolean
  noFade: boolean
  noCloseOnBackdrop: boolean
  noCloseOnEsc: boolean
  noEnforceFocus: boolean
  hideBackdrop: boolean
  headerTextVariant?: string
  headerCloseVariant?: string
  // headerCloseContent?: string
  headerBorderVariant?: string
  headerBgVariant?: string
  footerTextVariant?: string
  footerBgVariant?: string
  footerBorderVariant?: string
  centered: boolean
  cancelTitle: string
  cancelTitleHtml?: string
  bodyTextVariant?: string
  bodyBgVariant?: string
}

export default BModalInterface
