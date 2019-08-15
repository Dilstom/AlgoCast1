// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//  (n*2)-1

function pyramid(n) {
 let rowLength = n * 2 - 1;
 let center = Math.floor(rowLength / 2);
 for (let row = 0; row < n; row++) {
  let level = '';
  for (let column = 0; column < rowLength; column++) {
   if (center - row <= column && center + row >= column) {
    level += '#';
   } else {
    level += ' ';
   }
  }
  console.log(level);
 }
}

module.exports = pyramid;
