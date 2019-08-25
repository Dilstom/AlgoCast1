// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
 const newObj = {};
 for (let char of str) {
  newObj[char] = newObj[char] + 1 || 1; // if the first is falsy , assign 1
  // newObj[char] ? newObj[char]++ :newObj[char] = 1 // or that way
 }
 // console.log(newObj)
 //  const res = Object.keys(newObj).reduce((a, b) =>
 //   newObj[a] > newObj[b] ? a : b
 //  );
 //  return res;

 let max = 0;
 let res = '';
 for (let i in newObj) {
  //  i  - keys
  //   console.log(newObj[i]) // newObj[i] - values
  if (newObj[i] > max) {
   max = newObj[i];
   res = i;
  }
 }
 return res;
}

// 2nd solution:
// function maxChar(str) {
//  const newObj = {};
//  for (let i = 0; i < str.length; i++) {
//   if (newObj[str[i]]) {
//    newObj[str[i]] += 1;
//   } else {
//    newObj[str[i]] = 1;
//   }
//  }
//  // console.log(newObj)
//  const res = Object.keys(newObj).reduce((a, b) =>
//   newObj[a] > newObj[b] ? a : b
//  );
//  return res;
// }

module.exports = maxChar;
