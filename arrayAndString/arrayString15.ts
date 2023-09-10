function minSubArrayLen(target: number, nums: number[]) {
  let minLength = Infinity

  let left = 0
  let sum = 0

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1)

      sum -= nums[left]
      left++
    }
  }

  return minLength === Infinity ? 0 : minLength
}

/*function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.includes(target)) {
    return 1
  }

  if (nums.reduce((sum, actual) => sum + actual) < target) {
    return 0
  }

  let count = nums.length
  let current = 0

  while (true) {
    let compare = nums[0] - nums[nums.length - 1]
    if (compare > 0) {
      nums.pop()
    } else if (compare < 0) {
      nums.shift()
    } else {
      if (nums[1] >= nums[nums.length - 2]) {
        nums.pop()
      } else {
        nums.shift()
      }
    }

    current = nums.reduce((sum, actual) => sum + actual,0)

    if (current < target) {
      return count
    }
    count--
  }
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))

function minSubArrayLen(target: number, nums: number[]): number {
  let current = 0
  let count = 0

  nums.sort((a, b) => b - a)

  let index = nums.indexOf(target)

  if (index >= 0) {
    return 1
  }

  for (let i = 0; i < nums.length; i++) {
    current += nums[i]
    count++

    let dif = target - current

    if (dif <= 0) {
      return count
    }
  }

  return 0
}*/
