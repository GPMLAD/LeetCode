function generate(numRows: number): number[][] {
  let result: number[][] = []
  let temp: number[] = []

  for (let i = 0; i < numRows; i++) {
    temp.length = 0

    temp.push(1)

    if (i > 1) {
      let last = [...result[i - 1]]
      for (let j = 0; j < last.length - 1; j++) {
        temp.push(last[j] + last[j + 1])
      }
    }

    if (i > 0) {
      temp.push(1)
    }

    result[i] = [...temp]
  }

  return result
}