function addBinary(a: string, b: string): string {
  const bigIntA = BigInt('0b' + a) 
  const bigIntB = BigInt('0b' + b) 
  const total = bigIntA + bigIntB
  return total.toString(2) 
}
