class LNode {
  value: number
  next: LNode | null
  constructor(value?: number, next?: LNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }
}

class MyLinkedList {
  head: LNode | null
  size: number
  constructor() {
    this.head = null
    this.size = 0
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1
    let current = this.head
    let count = 0
    while (count < index) {
      current = current!.next
      count++
    }
    return current!.value
  }

  addAtHead(val: number): void {
    const newNode = new LNode(val, this.head)
    this.head = newNode
    this.size++
  }

  addAtTail(val: number): void {
    const newNode = new LNode(val)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return
    }

    if (index === 0) {
      this.addAtHead(val)
      return
    }

    let current = this.head
    let count = 0

    while (count < index - 1) {
      current = current!.next
      count++
    }

    const newNode = new LNode(val, current!.next)
    current!.next = newNode

    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }

    let current = this.head

    if (index === 0) {
      this.head = current!.next
    } else {
      let previous = current
      let count = 0

      while (count < index) {
        previous = current
        current = current!.next
        count++
      }
      previous!.next = current!.next
    }

    this.size--
  }
}
