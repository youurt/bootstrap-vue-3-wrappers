const parser = (value: string) => {
  const parsed = parseInt(value, 10)
  if (isNaN(parsed)) return value
  return parsed
}

export default parser
