import { ButtonType, Size } from '@/components/BButton/BButtonTypes'

interface BButtonInterface {
  block: boolean
  type: ButtonType
  pill: boolean
  squared: boolean
  size: Size
  pressed: boolean
  active: boolean
  to?: string
  tag: string
  disabled: boolean
}

export default BButtonInterface
