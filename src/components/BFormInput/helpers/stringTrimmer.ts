import BFormInputComputedInterface from '@/components/BFormInput/BFormInput.interface'

const trim = (props: BFormInputComputedInterface, val: string | number) => {
  if (typeof val === 'string') {
    return props.trim ? val.trim() : val
  }

  return val
}

export default trim
