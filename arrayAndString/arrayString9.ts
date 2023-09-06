function longestCommonPrefix(strs: string[]): string {
  let result = ''

  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0][i]
    let current = true

    strs.forEach(element => {
      if (element[i] !== currentChar) {
        current = false
      }
    })

    if (!current) {
      break
    }

    result += strs[0][i]
  }

  return result
}
