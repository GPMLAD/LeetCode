function isHappy(n: number): boolean {
  const seenNumbers = new Set<number>()

  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n)
    let total = 0
    const numberString = n.toString()
    for (let i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i], 10)
      total += digit ** 2
    }
    n = total
  }
  return n === 1
}
