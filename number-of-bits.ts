class Solution {
  solve(n: number): number {
    let numBits = 0;

    while (n > 0) {
      if ((n & 1) == 1) { 
        numBits++;
      }

      n >>= 1;
    }

    return numBits;
  }
}

export { Solution };
