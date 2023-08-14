function maximumWealth(accounts: number[][]): number {
  let result = 0;

  for (let i = 0; i < accounts.length; i++) {
    let aux = accounts[i].reduce((sum, value) => sum + value, 0);
    result = Math.max(result, aux);
  }

  return result;
}