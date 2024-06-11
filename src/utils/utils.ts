export const ITEMS = Array(29_999_999)
  .fill(0)
  .map((_, index) => ({
    value: index,
    isChecked: index === 29_999_998,
  }))
