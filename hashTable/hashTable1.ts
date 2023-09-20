class MyHashSet {
  mySet: number[]
  constructor() {
    this.mySet = []
  }

  add(key: number): void {
    if (!this.mySet.includes(key)) {
      this.mySet.push(key)
    }
    return
  }

  remove(key: number): void {
    let keyIndex: number = this.mySet.indexOf(key)
    if (keyIndex != -1) {
      this.mySet.splice(keyIndex,1)
    }
  }

  contains(key: number): boolean {
    return this.mySet.includes(key)
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
