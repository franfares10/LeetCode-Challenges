/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
const rangeSearchLeft = (nums, target, last_index) => {
    const index = binarySearch(nums.slice(0, last_index), target);
    if (index === -1) {
        return last_index;
    } else {
        return rangeSearchLeft(nums, target, index);
    }
}

const rangeSearchRight = (nums, target, initial_index) => {
    const index = binarySearch(nums.slice(initial_index, nums.length), target);
    if (index === -1) {
        return initial_index - 1;
    } else {
        return rangeSearchRight(nums, target, initial_index + index + 1);
    }
}

const searchRangea = function (nums, target) {
    const first_match = binarySearch(nums, target);
    if (first_match === -1) return [-1, -1];
    if(nums.length === 1) return [0, 0];
    return [rangeSearchLeft(nums, target, first_match ), rangeSearchRight(nums, target, first_match + 1)];
};


const searchRange = (nums, target) => {
    const binarySearchBoundary = (nums, target, isLeft) => {
        let left = 0;
        let right = nums.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (isLeft && nums[mid] === target)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    const leftIndex = binarySearchBoundary(nums, target, true);
    if (leftIndex === nums.length || nums[leftIndex] !== target) {
        return [-1, -1];
    }
    const rightIndex = binarySearchBoundary(nums, target, false) - 1;
    return [leftIndex, rightIndex];
};

console.log(searchRange([5,7,7,8,8,10], 8)) // [3,4]