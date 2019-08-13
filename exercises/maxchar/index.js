// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
 const newObj = {};
 for (let i = 0; i < str.length; i++) {
  if (newObj[str[i]]) {
   newObj[str[i]] += 1;
  } else {
   newObj[str[i]] = 1;
  }
 }
 // console.log(newObj)
 const res = Object.keys(newObj).reduce((a, b) =>
  newObj[a] > newObj[b] ? a : b
 );
 return res;
}

module.exports = maxChar;
