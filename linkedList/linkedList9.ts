const isPalindrome = (head: ListNode | null): boolean => {
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let prev: ListNode | null
  let temp: ListNode | null

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  prev = slow
  slow = slow!.next
  prev!.next = null

  while (slow) {
    temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }

  fast = head
  slow = prev

  while (slow) {
    if (fast!.val !== slow.val) {
      return false
    } else {
      fast = fast!.next
      slow = slow.next
    }
  }

  return true
}
