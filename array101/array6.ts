function removeElement(nums: number[], val: number): number {

  while (nums.indexOf(val) >= 0) {
    nums.splice(nums.indexOf(val), 1)
  }
  nums.sort((a, b) => a - b)
  return nums.length
}

