function checkIfExist(arr: number[]): boolean {
  let noZeros: number[] = arr.filter(element => element != 0)
  let find: boolean = false

  for (let i = 0; i < noZeros.length; i++) {
    const elementIndex = noZeros.indexOf(noZeros[i] / 2)
    if (elementIndex >= 0) {
      find = true
      break
    }
  }
  if(arr.length - noZeros.length > 1) return true

  return find
}
