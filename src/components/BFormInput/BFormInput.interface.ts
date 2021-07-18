import { InputType } from '@/components/BFormInput/BFormInputTypes'
import { Size } from '@/common/types/commonTypes'

interface BFormInputInterface {
  type: InputType
  size?: Size
  state: boolean
  readonly: boolean
  number: boolean
  modelValue: string | number
  trim: boolean
  lazy: boolean
  disabled: boolean
}

export default BFormInputInterface
