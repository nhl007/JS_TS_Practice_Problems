const arr = [0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8];

console.time('run fn');
const sum = arr.reduce((a, b, curr) => {
  return a + b;
});
console.log(sum);
console.timeEnd('run fn');
for (let i = 0; i < arr.length; i++) {
    if (b === arr[curr - 1]) {
      return a;
    }
  }