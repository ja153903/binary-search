class LLNode {
  val: number;
  next: LLNode | null;

  constructor(val: number, next: LLNode | null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  solve(node: LLNode | null): number {
    let len = 0;

    while (node) {
      len++;
      node = node.next;
    }

    return len;
  }
}

export { Solution, LLNode };
