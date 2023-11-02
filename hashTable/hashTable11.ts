function intersect(nums1: number[], nums2: number[]): number[] {
  const frequencyMap1 = new Map<number, number>()
  const result: number[] = []

  for (const num of nums1) {
    frequencyMap1.set(num, (frequencyMap1.get(num) || 0) + 1)
  }

  for (const num of nums2) {
    if (frequencyMap1.has(num) && frequencyMap1.get(num)! > 0) {
      result.push(num)
      frequencyMap1.set(num, frequencyMap1.get(num)! - 1)
    }
  }

  return result
}
