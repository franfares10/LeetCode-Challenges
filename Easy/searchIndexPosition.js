var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let middle = Math.trunc((start + end) / 2);
  
    while(true){
      if(end < start){
        return start;
      }
      if(target == nums[middle]){
        return middle;
      }
      if(target < nums[middle]){
          end = middle-1;
          middle = Math.trunc((start + end) / 2);
      }
      if(target > nums[middle]){
        start = middle+1;
        middle = Math.trunc((start + end) / 2);
      }
    }

};

console.log(searchInsert([1,2,3,4,5,6,7,8,9,10],17));