import BFormInterface from '@/components/BForm/BForm.interface'

const bFormClass = (props: BFormInterface) => {
  if (props.inline) {
    return props.inline && !props.validated
      ? 'row g-3 align-items-center'
      : props.inline && props.validated
      ? 'row g-3 align-items-center was-validated'
      : null
  }
}

export default bFormClass
