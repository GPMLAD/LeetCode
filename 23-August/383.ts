/*
// Version 1
function canConstruct(ransomNote: string, magazine: string): boolean {
  const avaliableChar = magazine.split('')
  const neededChar = ransomNote.split('')
  let control = 0

  for (let i = 0; i < neededChar.length; i++) {
    let charIndex = avaliableChar.indexOf(neededChar[i])
    if (charIndex != -1) {
      avaliableChar.splice(charIndex, 1)
    } else {
      control++
    }
  }

  if (!control) {
    return true
  }

  return false
}
*/

// Version 2
/*
function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCount: { [char: string]: number } = {};

  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount)
  console.log()
  for (const char of ransomNote) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}
*/

// Version 3
function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCount = new Map<string, number>()

  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  for (const char of ransomNote) {
    if (!charCount.has(char)) {
      return false
    }
    const count = charCount.get(char)!
    if (count === 1) {
      charCount.delete(char)
    } else {
      charCount.set(char, count - 1)
    }
  }

  return true
}
