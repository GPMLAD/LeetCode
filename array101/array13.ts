function sortArrayByParity(nums: number[]): number[] {
  let evens: number[] = nums.filter(element => element%2 == 0)
  let odds: number[] = nums.filter(element => element%2 !== 0)
  const result  = evens.concat(odds)
  return result
}
