function plusOne(digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  // If all digits are 9, add an additional digit 1 at the beginning
  digits.unshift(1);
  return digits;
}

// Test case
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result);
