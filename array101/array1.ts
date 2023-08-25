function findMaxConsecutiveOnes(nums: number[]): number {
  let total = 0
  let current = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      current++
    } else {
      current = 0
    }
    if (current > total) {
      total = current
    }
  }
  return total
}
