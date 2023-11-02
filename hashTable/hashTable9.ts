function findRestaurant(list1: string[], list2: string[]): string[] {
  const indexMap = new Map<string, number>()

  for (let i = 0; i < list1.length; i++) {
    indexMap.set(list1[i], i)
  }

  let minIndexSum: number = Infinity
  let commonStrings: string[] = []

  for (let j = 0; j < list2.length; j++) {
    const currentString = list2[j]

    if (indexMap.has(currentString)) {
      const indexSum = j + indexMap.get(currentString)!

      if (indexSum < minIndexSum) {
        minIndexSum = indexSum
        commonStrings = [currentString]
      } else if (indexSum === minIndexSum) {
        commonStrings.push(currentString)
      }
    }
  }

  return commonStrings
}
