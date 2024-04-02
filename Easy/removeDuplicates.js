const removeDuplicates = function (nums) {
    const uniqueNumbers = new Set(nums);
    const uniqueNumbersArray = Array.from(uniqueNumbers);
    for (let i = 0; i < nums.length; i++) {
        if (i < uniqueNumbersArray.length) {
            nums[i] = uniqueNumbersArray[i];
        } else {
            nums[i] = null;
        }
    }
    return uniqueNumbersArray.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))