function isIsomorphic(s: string, t: string): boolean {
  const mapS = new Map<number, string>()
  const mapT = new Map<string, string>()

  const auxS = s.split('')
  const auxT = t.split('')

  for (let i = 0; i < auxS.length; i++) {
    let element = auxS[i]
    mapS.set(i, element)
  }

  for (let j = 0; j < auxT.length; j++) {
    let element = auxT[j]
    let isMapped = mapT.has(mapS.get(j)!)

    if (isMapped) {
      const previous = mapT.get(mapS.get(j)!)
      if (previous != element) {
        return false
      }
    } else {
      const previousValues = [...mapT.values()]
      if (previousValues.includes(element)){
        return false
      }
      mapT.set(mapS.get(j)!, element)
    }
  }
  
  return true
}

console.log(isIsomorphic('paper', 'title'))
