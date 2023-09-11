const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let fast: ListNode | null = head
  let slow: ListNode | null = head

  for (let i = 0; i < n; i++) {
    if (fast) {
      fast = fast.next
    } else {
      return head
    }
  }

  if (!fast) {
    return head!.next
  }

  while (fast.next) {
    fast = fast.next
    slow = slow!.next
  }

  slow!.next = slow!.next!.next

  return head
}
