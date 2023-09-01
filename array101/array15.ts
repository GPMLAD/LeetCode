function heightChecker(heights: number[]): number {
  const aux = [...heights]
  heights.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < aux.length; i++) {
    if (aux[i] != heights[i]) {
      result++
    }
  }
  return result
}
