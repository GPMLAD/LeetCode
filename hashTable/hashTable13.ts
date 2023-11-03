function groupAnagrams(strs: string[]): string[][] {
  const mapping = new Map<string, string[]>()

  for (const word of strs) {
    const sorted = word.split('').sort().join()

    if (mapping.has(sorted)) {
      mapping.set(sorted, [...mapping.get(sorted)!, word])
    } else {
      mapping.set(sorted, [word])
    }
  }

  return [...mapping.values()]
}
