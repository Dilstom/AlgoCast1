// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
 // Number doesn't work here
 let str =
  parseInt(
   n
    .toString()
    .split('')
    .reverse()
    .join('')
  ) * Math.sign(n);

 return str;
}
// function reverseInt(n) {
//  let str = n.toString();
//  if (n < 0) {
//   str = str
//    .slice(1)
//    .split('')
//    .reverse()
//    .join('');
//   return Number(-str);
//  } else {
//   str = str
//    .split('')
//    .reverse()
//    .join('');
//   return Number(str);
//  }
// }

module.exports = reverseInt;
