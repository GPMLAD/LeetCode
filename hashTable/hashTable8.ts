function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const mapS = new Map<string, string>()
  const mapT = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (mapS.has(charS)) {
      if (mapS.get(charS) !== charT) {
        return false
      }
    } else {
      mapS.set(charS, charT)
    }

    if (mapT.has(charT)) {
      if (mapT.get(charT) !== charS) {
        return false
      }
    } else {
      mapT.set(charT, charS)
    }
  }

  return true
}

/*
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


*/
