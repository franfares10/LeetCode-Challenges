/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
var longestConsecutive = function(nums) {
    let numsSet = new Set(nums)
    let maxSequence = 0;
    numsSet.forEach(element => {
        if(!numsSet.has(element-1)){
            let consecutiveNumbers = 1;
            let nextNumber = element+1;
            while(numsSet.has(nextNumber)){
                consecutiveNumbers+=1;
                nextNumber+=1;
            }
            if(consecutiveNumbers > maxSequence){
                maxSequence = consecutiveNumbers;
            }
        }
    })

    return maxSequence;
};

console.log(longestConsecutive([100,4,200,1,3,2]))