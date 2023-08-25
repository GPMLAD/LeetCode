function sortedSquares(nums: number[]): number[] {
  let powerBy2: number[] = nums.map(number => number ** 2)
  powerBy2.sort(function (a, b) {
    return a - b
  })
  return powerBy2
}
