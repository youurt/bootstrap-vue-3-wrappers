import BColInterface from '@/components/BCol/BCol.interface'

const propsMapping = (props: BColInterface, style?: 'offset' | 'order') => {
  switch (style) {
    case 'offset':
      return {
        lg: props.offsetLg,
        md: props.offsetMd,
        sm: props.offsetSm,
        xl: props.offsetXl
      }
    case 'order':
      return {
        lg: props.orderLg,
        md: props.orderMd,
        sm: props.orderSm,
        xl: props.orderXl
      }
    default:
      return {
        lg: props.lg,
        md: props.md,
        sm: props.sm,
        xl: props.xl
      }
  }
}

export default propsMapping
