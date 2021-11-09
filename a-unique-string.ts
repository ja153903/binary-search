class Solution {
  solve(s: string): boolean {
    const seen: Set<string> = new Set();

    for (const c of s) {
      if (seen.has(c)) {
        return false;
      }

      seen.add(c);
    }

    return true;
  }
}

export { Solution };
