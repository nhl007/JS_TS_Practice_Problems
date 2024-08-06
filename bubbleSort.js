const arr = [0, 2, 99, 23, 4, 55, 56, 11, 29, 22];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const newArr = bubbleSort(arr);

console.log(newArr);
