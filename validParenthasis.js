const pairs = {
  '(': ')',
  '{': '}',
  '[': ']',
};
var isValid = function (s) {
  //   if (s.length % 2 !== 0) return false;
  const closeStack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(closeStack);
    if (pairs[s[i]]) {
      closeStack.push(pairs[s[i]]);
    } else if (s[i] !== closeStack.pop()) {
      return false;
    }
  }
  return !closeStack.length;
};

console.log(isValid('({}[])'));
