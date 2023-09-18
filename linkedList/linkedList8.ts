function oddEvenList(head: ListNode | null): ListNode | null {
  if (head !== null) {
    let odd: ListNode | null = head
    let even: ListNode | null = head.next
    let evenHead: ListNode | null = even

    while (even !== null && even.next !== null) {
      odd.next = odd.next!.next
      even.next = even.next!.next
      odd = odd.next!
      even = even.next!
    }

    odd.next = evenHead
  }

  return head
}
