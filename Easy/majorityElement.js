/*
Space: O(1)
Time: O(n)
*/

const majorityElement = function(nums) {
    let count = 0, maj = 0;
   for (let n of nums) {
       if (count === 0) {
           maj = n;
       }
       if (maj === n) {
           count++;
       } else {
           count--;
       }
   }
   return maj;
};