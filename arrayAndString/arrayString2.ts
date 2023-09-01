function dominantIndex(nums: number[]): number {
  let aux = [...nums]
  let result = -1
  nums.sort((a, b) => a - b)

  if (nums[nums.length - 1] >= nums[nums.length - 2] * 2) {
    result = aux.indexOf(nums[nums.length - 1])
  }
  return result
}

console.log(dominantIndex([3, 6, 1, 0]))
