function arrayPairSum(nums: number[]): number {
  let total = 0
  nums.sort((a, b) => a - b)

  let quantity = nums.length / 2
  for (let i = 0; i < quantity; i++) {
    total += nums[i * 2]
  }

  return total
}
