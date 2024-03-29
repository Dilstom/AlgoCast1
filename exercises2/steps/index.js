// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//  for (let i = 1; i <= n; i++) {
//   // <-- rows
//   let s = '';
//   for (let j = 1; j <= n; j++) {
//    // <-- columns
//    if (j <= i) {
//     s += '#';
//    } else {
//     s += ' ';
//    }
//   }
//   console.log(s);
//  }
// }

module.exports = steps;

// using recursion
function steps(n, row = 0, stair = '') {
    if (n === row) {
     return;
    }
    if (n === stair.length) {
     console.log(stair);
     return steps(n, row + 1);
    }
    stair.length <= row ? (stair += '#') : (stair += ' ');
    steps(n, row, stair);
   }
