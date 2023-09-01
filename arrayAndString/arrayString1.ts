function pivotIndex(nums: number[]): number {
  let result = -1
  for (let i = 0; i < nums.length; i++) {
    let left = 0
    let right = 0
    for (let j = 0; j < i; j++) {
      left = left + nums[j]
    }
    for (let k = nums.length - 1; k > i; k--) {
      right = right + nums[k]
    }
    if (left == right) {
      result = i

      break
    }
  }

  return result
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]))
