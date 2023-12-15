/*
function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  const isValid = (arr: string[]): boolean => {
    seen.clear()
    return arr.every(num => (num === '.' || !seen.has(num)) && seen.add(num))
  }

  for (let i = 0; i < 9; i++) {
    if (!isValid(board[i]) || !isValid(board.map(row => row[i]))) {
      return false
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const subgrid = [
        board[3 * i][3 * j],
        board[3 * i][3 * j + 1],
        board[3 * i][3 * j + 2],
        board[3 * i + 1][3 * j],
        board[3 * i + 1][3 * j + 1],
        board[3 * i + 1][3 * j + 2],
        board[3 * i + 2][3 * j],
        board[3 * i + 2][3 * j + 1],
        board[3 * i + 2][3 * j + 2]
      ]

      if (!isValid(subgrid)) {
        return false
      }
    }
  }

  return true
}
*/
/*
function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  const isValid = (arr: string[]): boolean => {
    seen.clear()
    return arr.every(num => (num === '.' || !seen.has(num)) && seen.add(num))
  }

  for (let i = 0; i < 9; i++) {
    // Verificar linhas e colunas
    if (!isValid(board[i]) || !isValid(board.map(row => row[i]))) {
      return false
    }

    // Verificar subgrades 3x3
    const startRow = Math.floor(i / 3) * 3
    const startCol = (i % 3) * 3
    const subgrid = [
      board[startRow][startCol],
      board[startRow][startCol + 1],
      board[startRow][startCol + 2],
      board[startRow + 1][startCol],
      board[startRow + 1][startCol + 1],
      board[startRow + 1][startCol + 2],
      board[startRow + 2][startCol],
      board[startRow + 2][startCol + 1],
      board[startRow + 2][startCol + 2]
    ]

    if (!isValid(subgrid)) {
      return false
    }
  }

  return true
}
*/
 
function isValidSudoku(board: string[][]): boolean {
  const isValid = (arr: string[]): boolean => {
      const seen = new Set<string>();
      return arr.every(num => (num === '.' || !seen.has(num)) && seen.add(num));
  };

  const isSubgridValid = (startRow: number, startCol: number): boolean => {
      const subgrid = [];
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              subgrid.push(board[startRow + i][startCol + j]);
          }
      }
      return isValid(subgrid);
  };

  for (let i = 0; i < 9; i++) {
      // Verificar linhas e colunas
      if (!isValid(board[i]) || !isValid(board.map(row => row[i]))) {
          return false;
      }

      // Verificar subgrades 3x3
      if (i % 3 === 0) {
          for (let j = 0; j < 9; j += 3) {
              if (!isSubgridValid(i, j)) {
                  return false;
              }
          }
      }
  }

  return true;
}

/*
function isValidSudoku(board: string[][]): boolean {
  const isValid = (arr: string[]): boolean => {
    const seen = new Set()
    for (const num of arr) {
      if (num !== '.' && seen.has(num)) {
        return false
      }
      seen.add(num)
    }
    return true
  }

  for (const row of board) {
    if (!isValid(row)) {
      return false
    }
  }

  for (let col = 0; col < 9; col++) {
    const column = board.map(row => row[col])
    if (!isValid(column)) {
      return false
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subgrid = []
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          subgrid.push(board[i + x][j + y])
        }
      }
      if (!isValid(subgrid)) {
        return false
      }
    }
  }

  return true
}
*/
