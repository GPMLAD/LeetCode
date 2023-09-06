function reverseString(s: string[]): void {
  for (let i = 0; i < s.length; i++) {
    if (i >= s.length - 1 - i) {
      break
    }
    let aux = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = aux
  }
}

let a = 'leroBlero'.split('')
reverseString(a)
