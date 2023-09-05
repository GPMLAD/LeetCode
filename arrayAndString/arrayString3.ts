function plusOne(digits: number[]): number[] {
  let newSlot = false
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] <= 8) {
      digits[i] = digits[i] + 1
      break
    }
    if (i == 0 && digits[i] > 8) {
      digits[i] = 0
      newSlot = true
      break
    }
    if (digits[i] > 8) {
      digits[i] = 0
      continue
    }
  }
  if (newSlot) digits.unshift(1)
  return digits
}