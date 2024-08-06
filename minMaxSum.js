function miniMaxSum(arr) {
  const sumarr = [];
  let maxSum = 0;
  let minSum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(sum, i, 'outer');
    for (let j = 0; j < 5; j++) {
      console.log(sum, i, j, 'inner');

      if (i === j) {
        continue;
      } else {
        sum += arr[j];
      }
    }

    if (i === 0) {
      minSum = sum;
      maxSum = sum;
      sum = 0;
    } else if (sum < minSum) {
      minSum = sum;
      sum = 0;
    } else if (sum > maxSum) {
      maxSum = sum;
      sum = 0;
    } else {
      sum = 0;
      continue;
    }
  }

  console.log(minSum + ' ' + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);

// function miniMaxSum(arr) {
//     const len=arr.length
//     let minSum=0
//     let maxSum=0
//     arr.sort()

//     const lowest=arr[0]
//     const highest=arr[len-1]

//     for(let i=0;i<len;i++){
//         if(arr[i]===lowest){
//             minSum+=arr[i]
//         }
//        else if(arr[i]===highest){
//             maxSum+=arr[i]
//         }
//         else{
//             minSum+=arr[i]
//             maxSum+=arr[i]
//         }
//     }

//     console.log(minSum+" "+maxSum)

// }
