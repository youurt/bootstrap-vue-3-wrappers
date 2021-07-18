const orderOffsetGenerator = (
  order: Record<string, unknown>,
  offset: Record<string, unknown>,
  style?: 'offset' | 'order'
) => {
  const res = []
  for (const [key, value] of Object.entries(
    style === 'order' ? order : offset
  )) {
    value ? res.push(`${style}-${key}-${value}`) : res.push(undefined)
  }
  return res
}

export default orderOffsetGenerator
