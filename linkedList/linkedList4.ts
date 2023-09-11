function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null
  }
  let nodeA: ListNode | null = headA
  let nodeB: ListNode | null = headB

  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next
    nodeB = nodeB === null ? headA : nodeB.next
  }
  return nodeB
}

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/discuss/1093014/C++-Four-different-solutions this helped me a lot!!!
