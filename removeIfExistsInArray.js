//! unique indices

//! 1 small pair

//! 1 large pair

// ? return == large pair value - small pair value

const arr = [1, 2, 1, 8, 3, 4, 1, 5, 1, , 8, 6, 7, 100, 8, 9];

const sum_of_pair = (array) => {
  let countMap = {}; // Object to store count of each value

  // Count the occurrences of each value in the array
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    countMap[value] = (countMap[value] || 0) + 1;
  }
  //   console.log(countMap)
  // Filter out the values that have a count greater than 1
  const uniqueValues = array.filter((value) => {
    return countMap[value] === 1;
  });

  return uniqueValues;
};

console.log(sum_of_pair(arr));
