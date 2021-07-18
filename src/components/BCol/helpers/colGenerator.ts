const colGenerator = (cols: Record<string, unknown>) => {
  const res = []
  for (const [key, value] of Object.entries(cols)) {
    value
      ? res.push(
          value
            ? typeof value === 'number' || typeof value === 'string'
              ? `col-${key}-${value}`
              : `col-${key}`
            : null
        )
      : res.push(undefined)
  }
  return res
}

export default colGenerator
