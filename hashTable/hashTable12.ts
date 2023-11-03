function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapping = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (mapping.has(element) && i - (mapping.get(element) as number) <= k) {
      return true;
    }
    mapping.set(element, i);
  }

  return false;
}


/*function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapping = new Map<number, number[]>()

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (mapping.has(element)) {
      let previous = mapping.get(element)!
      previous.push(i)
      mapping.set(element, previous)
    } else {
      mapping.set(element, [i])
    }
  }

  let arrValues = [...mapping.values()]

  for (let i = 0; i < arrValues.length; i++) {
    const arr = arrValues[i]

    if (arr.length > 1) {
      for (let j = 0; j < arr.length - 1; j++) {
        let biggest = arr[j + 1]
        let smallest = arr[j]
        if (biggest - smallest <= k) {
          return true
        }
      }
    }
  }

  return false
}

*/