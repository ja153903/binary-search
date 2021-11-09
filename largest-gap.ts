class Solution {
    solve(nums: Array<number>): number {
       nums.sort((a, b) => a - b);

       let maximumDiff = 0;

       for (let i = 1; i < nums.length; i++) {
         maximumDiff = Math.max(maximumDiff, nums[i] - nums[i-1]);
       }

       return maximumDiff;
    }
}

export { Solution };
