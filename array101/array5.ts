/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const filter1 = nums1.slice(0, m)
  const filter2 = nums2.slice(0, n)
  const total: number[] = filter1.concat(filter2)
  total.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < total.length; i++) {
    nums1[i] = total[i]
  }
  return
}
