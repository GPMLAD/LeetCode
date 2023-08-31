function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false

  let goingUp: boolean | null = null
  let goingDown = false

  let last: number = arr[0]
  let isMountain = true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > last) {
      goingUp = true
      last = arr[i]
      if (goingDown) {
        isMountain = false
        break
      }
    } else if (arr[i] < last) {
      if (goingUp == null) {
        isMountain = false
        break
      }
      goingUp = false
      goingDown = true
      last = arr[i]
    } else {
      isMountain = false
      break
    }
  }

  if (goingUp) return false

  return isMountain
}

console.log(validMountainArray([0, 1, 2, 1, 2]))
