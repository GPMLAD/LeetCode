function replaceElements(arr: number[]): number[] {
  const n = arr.length
  if (n === 0) return []

  let maxRight = -1

  for (let i = n - 1; i >= 0; i--) {
    const current = arr[i]
    arr[i] = maxRight
    maxRight = Math.max(maxRight, current)
  }

  return arr
}
