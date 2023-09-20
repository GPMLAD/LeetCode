function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const result: number[] = []

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num)
    }
  }

  return result
}
/*
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = nums2.filter((num) => set1.has(num));
  return Array.from(new Set(result));
}
 */
