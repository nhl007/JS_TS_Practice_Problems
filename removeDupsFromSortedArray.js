const removeDuplicates = function (nums) {
  let currentIndex = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) {
      nums[currentIndex] = nums[i + 1];
      currentIndex++;
    }
  }
  nums.length = currentIndex;
  return nums.length;
};

console.log(removeDuplicates([0, 1, 1, 2, 2, 3, 3, 3]));
