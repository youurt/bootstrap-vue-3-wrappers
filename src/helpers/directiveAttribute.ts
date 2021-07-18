type Binding = {
  value: string
  modifiers: Record<string, boolean>
}

const setDirectiveAttribute = (
  el: HTMLElement,
  binding: Binding,
  mode: string
) => {
  el.setAttribute('data-bs-toggle', mode)

  el.setAttribute(
    'data-bs-target',
    binding.value && binding.value.length > 0
      ? `#${binding.value}`
      : `#${Object.entries(binding.modifiers)[0][0]}`
  )
}

export default setDirectiveAttribute
