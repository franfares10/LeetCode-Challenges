function sortASC(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (nums[i] > nums[j]) {
          let aux = nums[i];
          nums[i] = nums[j];
          nums[j] = aux;
        }
      }
    }
    return nums;
  }