function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast != null) {
    fast = fast.next
    if (fast == null) {
      return false
    } else {
      fast = fast.next
      if (fast == slow) {
        return true
      }
      slow = slow!.next
      if (slow == fast) {
        return true
      }
    }
  }

  return false
}

/*
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false; // Não há ciclo se não houver elementos ou apenas um elemento na lista
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Encontrou um ciclo
    }
  }

  return false; // Não encontrou ciclo
}

*/
