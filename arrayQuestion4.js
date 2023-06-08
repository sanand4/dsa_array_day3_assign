function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// Test case
const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);
console.log(index);
