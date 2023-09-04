/*
function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length
  const n = mat[0].length
  let aux: number[] = []
  let final: number[] = []

  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      console.log(mat[k][i - k])
      aux.push(mat[k][i - k])
    }
    if (i % 2 != 0) {
      aux.forEach(element => final.push(element))
    } else {
      aux.reverse().forEach(element => final.push(element))
    }
    aux.length = 0
  }

  if (m > 1) {
    for (let j = 1; j < m; j++) {
      for (let k = 0; k < m - j; k++) {
        aux.push(mat[j + k][n - 1 - k])
      }

      if ((n - 1 + j) % 2 != 0) {
        aux.forEach(element => final.push(element))
      } else {
        aux.reverse().forEach(element => final.push(element))
      }
      aux.length = 0
    }
  }
  return final
}
*/
function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length
  const n = mat[0].length
  const result: number[] = []

  for (let diagonalSum = 0; diagonalSum < m + n - 1; diagonalSum++) {
    const diagonal: number[] = []

    for (let i = 0; i < m; i++) {
      const j = diagonalSum - i

      if (j >= 0 && j < n) {
        diagonal.push(mat[i][j])
      }
    }

    if (diagonalSum % 2 === 0) {
      result.push(...diagonal.reverse())
    } else {
      result.push(...diagonal)
    }
  }

  return result
}
