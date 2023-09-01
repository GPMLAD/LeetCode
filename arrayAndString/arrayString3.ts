function plusOne(digits: number[]): number[] {
  let result = (parseInt(digits.toString().replace(/,/gi, '')) + 1)
    .toString()
    .split('')
    .map(element => parseInt(element))
  return result
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
