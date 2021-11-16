class Solution {
  solve(nums: Array<number>): number {
    // given an array sorted in ascending order
    // return the minimum i such that nums[i] = i
    // else return -1
    //
    // this problem boils down to a binary search question
    // we can start in the middle and check if nums[i] === i
    // if nums[i] > i, then we have to limit right = mid - 1
    // else left = mid + 1
    let left = 0;
    let right = nums.length - 1;

    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === mid) {
        result = mid;
        break;
      } else if (nums[mid] < mid) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (result !== -1) {
      // check from [0, result - 1] to see if there are smaller ones
      left = 0;
      right = result - 1; 

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === mid) {
          result = mid;
          break;
        } else if (nums[mid] < mid) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    
    return result;
  }
}

export { Solution };
