/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

var productExceptSelf = function(nums) {
    let res = [];
    let prefix = 1;
    for(let i = 0; i<nums.length; i++){
        res[i] =prefix;
        prefix*=nums[i];
    }
    let postFix = 1;

    for(let i = nums.length-1;i>-1;i--){
        res[i]*=postFix;
        postFix*=nums[i]
    }


    return res;
};

