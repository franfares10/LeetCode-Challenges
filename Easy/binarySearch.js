var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
  
    while(left < right){
      if(target > nums[left]){
        left+=1;
      }
      if(target < nums[right]){
        right-=1;
      }
    }
    if(nums[left] == target){
      return left;
    }
    else{
      return -1;
    }
  };