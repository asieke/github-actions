/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (isPalindrome(s)) return s;

  for (let i = s.length - 1; i >= 1; i--) {
    for (let j = 0; j < s.length - i + 1; j++) {
      if (isPalindrome(s.substr(j, i))) {
        return s.substr(j, i);
      }
    }
  }
};

let isPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; j >= i; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  if (s.length > 1000) return 'too big';
  return true;
};
