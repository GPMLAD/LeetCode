function singleNumber(nums: number[]): number {
  const myHashSet = new Set<number>()

  for (const num of nums) {
    if (myHashSet.has(num)) {
      myHashSet.delete(num)
    } else {
      myHashSet.add(num)
    }
  }

  for (const item of myHashSet) {
    return item
  }

  return 0
}

/*
function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
*/
