var isPalindrome = function (x) {
  const num = x.toString();
  let len = num.length;
  for (let i = 0; i < len; i++) {
    if (num.charAt(i) !== num.charAt(len - 1)) {
      return false;
    } else {
      len--;
    }
  }
  return true;
};

console.log(isPalindrome(11411));
