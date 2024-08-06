const words = ['dog', 'dacecar', 'dar'];

const longestCommonPrefix = function (words) {
  if (!words.length) return '';
  if (words.length == 1) return arr[0];

  let sorted = words.sort();
  //   console.log(sorted);

  let output = [];
  let firstWord = sorted[0];
  let lastWord = sorted[sorted.length - 1];
  for (var i = 0; i < firstWord.length; i++) {
    if (firstWord[i] == lastWord[i]) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }

  return output.join('');
};
