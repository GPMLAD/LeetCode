function containsDuplicate(nums: number[]): boolean {
  const myHashSet = new Set<number>()

  for (const num of nums) {
    if (myHashSet.has(num)) {
      return true
    } else {
      myHashSet.add(num)
    }
  }

  return false
}
