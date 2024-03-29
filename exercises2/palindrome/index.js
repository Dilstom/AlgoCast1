// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//  const new_str = str
//   .split('')
//   .reverse()
//   .join('');

//  return new_str === str; // OR
//  //   return new_str === str ? true : false;
// }
function palindrome(str) {
 return str.split('').every((l, i) => {
  return l === str[str.length - i - 1];
 });
}

module.exports = palindrome;
