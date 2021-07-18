import BColInterface from '@/components/BCol/BCol.interface'
import orderOffsetGenerator from '@/components/BCol/helpers/orderOffsetGenerator'
import colGenerator from '@/components/BCol/helpers/colGenerator'
import propsMapping from '@/components/BCol/helpers/propsMapping'

const sizeGenerator = (props: BColInterface, style?: 'offset' | 'order') => {
  if (typeof style === 'string') {
    return orderOffsetGenerator(
      propsMapping(props, 'order'),
      propsMapping(props, 'offset'),
      style
    )
  } else {
    return colGenerator(propsMapping(props))
  }
}

export default sizeGenerator
