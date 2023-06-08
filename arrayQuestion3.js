function nextPermutation(nums) {
  const n = nums.length;
  let i = n - 2;

  // Find the first pair of elements from the right that violate the non-decreasing order
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;

    // Swap the violating element with the smallest element to its right that is greater than it
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }

    swap(nums, i, j);
  }

  // Reverse the elements to the right of the violating element
  reverse(nums, i + 1, n - 1);
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

// Test case
const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
