// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using reverse:
function reverse(str) {
 debugger;
 let newStr = str.split('');
 newStr = newStr.reduce((a, b) => b + a);
 return newStr;
}

reverse('abcd');
// for loop ++
// function reverse(str) {
//  let newStr = '';

//  for (let i = 0; i < str.length; i++) {
//   newStr = str[i] + newStr;
//  }
//  return newStr;
// }

// or  for loop (--)
// function reverse(str) {
//  let newStr = '';

//  for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
//  }
//  return newStr;
// }

// or Using for of
// function reverse(str) {
//  console.log(str[3]);

//  let newStr = '';

//  for (let i of str) {
//   newStr = i + newStr;
//  }
//  return newStr;
// }

// Using reverse:

// function reverse(str) {
//  str = str
//   .split('')
//   .reverse()
//   .join('');
//  return str;
// }

module.exports = reverse;
