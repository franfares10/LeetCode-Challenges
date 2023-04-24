function binarySearch(nums, number, start, end) {
    let middle = Math.trunc((start + end) / 2);
  
    if (number == nums[middle]) {
      return middle;
    }
    if (end < start) {
      return start;
    }
    if (number < nums[middle]) {
      return binarySearch(nums, number, start, middle - 1);
    }
    if (number > nums[middle]) {
      return binarySearch(nums, number, middle + 1, end);
    }
  }