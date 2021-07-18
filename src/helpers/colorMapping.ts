import colorMapInterface from '@/helpers/types/colorMap.interface'

const mapColorNameToCode = (
  colorName: string,
  colorMap: colorMapInterface
): string | undefined => {
  for (const [key, value] of Object.entries(colorMap)) {
    if (colorName === key) {
      return value
    }
  }
}

export default mapColorNameToCode
