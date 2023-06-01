/*
33. Search in Rotated Sorted Array
Medium
21.4K
1.3K
Companies
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

var search = function(nums, target) {
    let r = nums.length -1;
    let l = 0;
    let res = -1;
    while(l <= r){
        let middle = Math.trunc((l+r)/2);

        if(target == nums[middle]){
            res = middle;
            break;
        }

        if(nums[l] <= nums[middle]){
            if(target > nums[middle] || target < nums[l]){
                l = middle + 1;
            }
            else{
                r = middle - 1;
            }
        }else{
            if(target < nums[middle] || target > nums[r]){
                r = middle - 1;
            }
            else{
                l = middle + 1;
            }
        }
    }
    return res;
};

console.log(search([4,5,6,7,0,1,2],0))