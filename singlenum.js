// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// var singleNumber = function(nums) {
//     for(let i = 0; i < nums.length; i++){

//     }
// };
var singleNumber = function (nums) {
  let ones = 0;
  let twos = 0;

  for (let num of nums) {
    ones = (ones ^ num) & ~twos;
    twos = (twos ^ num) & ~ones;
  }

  return ones;
};

const nums = [0, 1, 0, 1, 0, 1, 99];

console.log(singleNumber(nums));
