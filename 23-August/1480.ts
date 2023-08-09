function runningSum(nums: number[]): number[] {
  const result: number[] = new Array(nums.length);
  let sum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }

  return result;
}