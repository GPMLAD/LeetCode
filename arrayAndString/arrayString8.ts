function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0

  const haystackLength = haystack.length
  const needleLength = needle.length

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.slice(i, i + needleLength) === needle) {
      return i
    }
  }

  return -1
}

/*
function strStr(haystack: string, needle: string): number {
  let index = haystack.indexOf(needle)
  return index
}
*/
