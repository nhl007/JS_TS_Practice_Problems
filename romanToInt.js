const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = symbols[s[i]];
    let next = symbols[s[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
// console.time('start');
console.log(romanToInt('IX'));
// console.time('end');

// const romans = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// };

// function romanToInt(s) {
//     const numbers = s.split('').map(v => romans[v]);
//     return numbers.reduce((acc, num, index) => num < numbers[index + 1] ?? 0 ? acc - num : acc + num, 0);
// };

// console.log(romanToInt("IL"))
