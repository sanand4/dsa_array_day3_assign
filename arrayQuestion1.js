function threeSumClosest(nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum === target) {
        return target; // Found exact sum, no need to continue
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Test case
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target));
