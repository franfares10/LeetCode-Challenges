/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;
    let count = 0;
    while (j >= i) {
        if (nums[i] === val) {
            if (nums[i] === nums[j]) {
                nums[j] = 0;
                j--;
            } else {
                nums[i] = nums[j];
                nums[j] = 0;
                count++;
                i++;
                j--;
            }
        } else {
            count++;
            i++;
        }
    }
    return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))