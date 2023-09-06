/*function reverseString(s: string[]): void {
  for (let i = 0; i < s.length; i++) {
    if (i >= s.length - 1 - i) {
      break
    }
    let aux = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = aux
  }
}*/

function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}
