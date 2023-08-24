class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class LinkedList {
  head: ListNode | null
  constructor() {
    this.head = null
  }

  addNewNode(val?: number) {
    const newNode = new ListNode(val)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  let fast : ListNode |null = head
  let slow : ListNode |null = head

  while(fast?.next){
      fast = fast?.next?.next
      slow = slow?.next ? slow.next : null
  }

  return slow
};

/*
function middleNode2(head: ListNode | null): ListNode | null | number[] {


  let aux: number[] = []
  let current = head
  while (current?.next) {
    aux.push(current.val)
    current = current.next
  }
  aux.push(current!.val)

  const result = aux.splice(aux.length/2)
  return result
}
*/