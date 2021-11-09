// Given an integer n, return the sum of the first n positive odd integers.
class Solution {
  solve(n: number): number {
    return n * n;
  }

  bruteForce(n: number): number {
    let i = 0;
    let j = 1;
    let sum = 0;

    while (i < n) {
      sum += j;
      j += 2;
      i++;
    }

    return sum;
  }
}

const solution = new Solution();

console.log(solution.solve(5));
