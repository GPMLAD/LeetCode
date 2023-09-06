function twoSum(numbers: number[], target: number): number[] {
  const numToIndexMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const complement = target - currentNum;

    if (numToIndexMap.has(complement)) {
      return [numToIndexMap.get(complement)! + 1, i + 1];
    }

    numToIndexMap.set(currentNum, i);
  }

  return [];
}

/*function twoSum(numbers: number[], target: number): number[] {
  let index = 0
  let aux: number[]
  let result: number[] = []

  if (target > 0) {
    aux = numbers.filter(element => element <= target)
  } else if (target < 0) {
    aux = numbers.filter(element => element >= target)
  } else {
    aux = [...numbers]
  }

  for (let i = 0; i < aux.length; i++) {
    let find: number = target - aux[i]
    index = aux.lastIndexOf(find)
    if (index >= 0) {
      result = [i + 1, index + 1]
      break
    }
  }
  return result
}*/
