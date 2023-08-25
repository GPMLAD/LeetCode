/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const aux: number[] = []

  for (let i = 0; i < arr.length; i++) {
    aux.push(arr[i])

    if (aux.length == arr.length) {
      break
    }

    if (arr[i] == 0) {
      aux.push(0)
    }

    if (aux.length == arr.length) {
      break
    }
  }

  for (let i = 0; i < aux.length; i++) {
    arr[i] = aux[i]
  }
}

const teste = [0, 0, 0]

duplicateZeros(teste)

console.log(teste)
