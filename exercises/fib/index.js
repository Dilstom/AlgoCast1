// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// using iteration
// function fib(n) {
//  const newArr = [0, 1];
//  for (let i = 2; i <= n; i++) {
//   newArr.push(newArr[i - 2] + newArr[i - 1]);
//  }
//  return newArr[newArr.length - 1];
//  //  return newArr[n];
//  //  return newArr.pop();
// }

module.exports = fib;
