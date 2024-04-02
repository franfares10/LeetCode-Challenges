const removeDuplicates = function (nums) {
    let aux = nums[0];
    let count = 1;
    let result = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === aux) {
            if (count < 2) {
                nums[result] = nums[i]
                aux = nums[i];
                result++;
                count++;
            }
        } else {
            aux = nums[i];
            nums[result] = nums[i];
            count = 1;
            result++;
        }

    }
    console.log(nums)
    return result;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 1, 2, 3, 3]))