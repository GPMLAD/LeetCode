function numberOfSteps(num: number): number {
  let steps = 0

  while (num > 0) {
    if (num % 2 !== 0) {
      num--
      steps++
    }
    if (num % 2 === 0 && num > 0) {
      num = num / 2
      steps++
    }
  }
  return steps
}

console.log(numberOfSteps(14))
