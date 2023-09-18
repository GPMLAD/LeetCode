function removeElements2(head: ListNode | null, val: number): ListNode | null {
  while (head !== null && head.val === val) {
    head = head.next
  }

  let current = head

  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}
/*function removeElements(head: ListNode | null, val: number): ListNode | null {
  
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy;
    
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next; 
        } else {
            current = current.next;
        }
    }
    
    return dummy.next; 
  }*/
