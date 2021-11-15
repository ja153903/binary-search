class LLNode {
  val: number;
  next: LLNode | null;

  constructor(val: number, next: LLNode | null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  solve(node: LLNode | null): LLNode | null {
    if (!node) {
      return null;
    }

    if (!node.next) {
      return node;
    }

    const secondHalf = this.getSecondHalf(node);
    const reversedSecondHalf = this.reverseLinkedList(secondHalf);
    const result = this.concatenate(node, reversedSecondHalf);

    return result;
  }

  getSecondHalf(node: LLNode | null): LLNode | null {
    let slow = node;
    let fast = node;

    while (fast && fast.next) {
      fast = fast?.next?.next ?? null;
      slow = slow?.next ?? null;
    }

    return slow;
  }

  reverseLinkedList(node: LLNode | null): LLNode | null {
    let current = node;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  concatenate(fromStart: LLNode | null, fromEnd: LLNode | null): LLNode | null {
    if (!fromStart && !fromEnd) {
      return null;
    }

    const result = new LLNode(-1, null);
    let runner: LLNode | null = result;

    while (fromStart && fromEnd) {
      if (fromEnd === fromStart) {
        runner.next = new LLNode(fromEnd.val, null);
        break;
      } else {
        runner.next = new LLNode(fromEnd.val, null);
        runner.next.next = new LLNode(fromStart.val, null);
        fromEnd = fromEnd.next;
        fromStart = fromStart.next;

        runner = runner.next.next;
      }
    }

    return result?.next;
  }
}

export { Solution };
