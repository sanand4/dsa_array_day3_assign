function fourSum(nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicates for the first element
    }

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue; // Skip duplicates for the second element
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++; // Skip duplicates for the third element
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--; // Skip duplicates for the fourth element
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// Test case
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
