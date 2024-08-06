const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(i);
}

const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.ceil(low + (high - low) / 2);
    let midValue = array[mid];

    console.log('[Steps] : middle value: ' + array[mid]);

    if (midValue < value) {
      low = mid + 1;
    } else if (midValue > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return false;
};

const idx = binarySearch(arr, 50);
if (idx) {
  console.log('Value found at index : ' + idx);
} else {
  console.log('No value found!');
}
