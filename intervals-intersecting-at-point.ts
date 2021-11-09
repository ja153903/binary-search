class Solution {
  solve(intervals: Array<Array<number>>, point: number): number {
    return intervals.reduce((count, interval) => {
      if (interval[0] <= point && interval[1] >= point) {
        return count + 1;
      }

      return count;
    }, 0);
  }
}

export { Solution };
