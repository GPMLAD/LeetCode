function firstUniqChar(s: string): number {
  const charCount = new Map<string, number>()

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}

/*function firstUniqChar(s: string): number {
  const map = new Map<string, number[]>()

  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    if (map.has(element)) {
      map.set(element, [map.get(element)![0], map.get(element)![1] + 1])
    } else {
      map.set(element, [i, 1])
    }
  }
  let aux = [...map.values()]
  for (let j = 0; j < aux.length; j++) {
    const element = aux[j]
    if (element[1] == 1) {
      return element[0]
    }
  }

  return -1
}*/
