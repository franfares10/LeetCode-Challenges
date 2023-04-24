function removeElement(nums, val) {
    let i = 0; 
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] != val) {
        let temp = nums[i]; 
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
      }
    }
    return { nums, i };
  }