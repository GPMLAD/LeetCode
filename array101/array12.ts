/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let aux: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      aux.push(nums[i])
    }
  }
  for (let i = 0; i < aux.length; i++) {
    nums[i] = aux[i]
  }

  for (let i = aux.length; i < nums.length; i++) {
    nums[i] = 0
  }
  return
}

let arr = [0, 1, 0, 3, 12]

moveZeroes(arr)
