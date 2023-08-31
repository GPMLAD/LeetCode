// The same solution of problem 7
/*function removeDuplicates(nums: number[]): number {
  let aux: number[] = []
  nums.forEach(element => aux.indexOf(element) == -1 && aux.push(element))
  for (let i = 0; i < aux.length; i++) {
    nums[i] = aux[i]
  }
  if(aux.length != nums.length){
    nums.splice(aux.length)
  }
  return aux.length
}
*/