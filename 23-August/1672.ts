function maximumWealth2(accounts: number[][]): number {
  let result = 0

  for (let i = 0; i < accounts.length; i++) {
    let aux = 0
    let row = accounts[i]

    for (let j = 0; j < row.length; j++) {
      aux += row[j]
    }
    result = Math.max(result, aux)
  }

  return result
}

function maximumWealth(accounts: number[][]): number {
  let result = 0;

  for (let i = 0; i < accounts.length; i++) {
    let aux = accounts[i].reduce((sum, value) => sum + value, 0);
    result = Math.max(result, aux);
  }

  return result;
}



let accounts = [
  [1, 2, 3],
  [3, 2, 1]
]
let accounts2 = [
  [1, 5],
  [7, 3],
  [3, 5]
]

console.log(maximumWealth(accounts))
console.log(maximumWealth(accounts2))
