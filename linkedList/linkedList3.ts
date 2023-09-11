function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head
  let hasCycle = false

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      hasCycle = true
      break
    }
  }

  if (!hasCycle) {
    return null
  }

  slow = head

  while (slow !== fast) {
    slow = slow!.next
    fast = fast!.next
  }

  return slow
}

/*function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head

  while (fast != null) {
    fast = fast.next
    if (fast == null) {
      return null
    } else {
      fast = fast.next
      if (fast == slow) {
        return slow
      }

      slow = slow!.next
      if (slow == fast) {
        return slow
      }
    }
  }

  return null
}
*/
