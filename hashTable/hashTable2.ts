class MyHashMap {
  private keys: number[] = []
  private values: number[] = []

  constructor() {}

  put(key: number, value: number): void {
    let index = this.keys.indexOf(key)
    if (index == -1) {
      this.keys.push(key)
      this.values.push(value)
    } else {
      this.values[index] = value
    }
    return
  }

  get(key: number): number {
    let index = this.keys.indexOf(key)
    if (index !== -1) {
      let result = this.values[index]
      return result
    } else {
      return -1
    }
  }

  remove(key: number): void {
    let index = this.keys.indexOf(key)
    if (index !== -1) {
      this.keys.splice(index, 1)
      this.values.splice(index, 1)
    }
    return
  }
}
