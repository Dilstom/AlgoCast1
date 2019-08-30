//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loopF(n) {
 while (n > 0) {
  console.log(n--);
 }
}
// loopF(5)

//2. Next, try looping just like above except using recursion
function recur(n) {
 console.log(n);
 if (n === 1) {
  return 1;
 }
 return recur(n - 1);
}
// recur(5)

//3.Write a function 'exponent' that takes two arguments base, and expo,
// uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
 // 7 * 7 * 7
 let res = 1;
 while (expo > 0) {
  res *= base;
  expo -= 1;
 }
 console.log(res);
}
exponent(7, 3);
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function RecursiveExponent(base, expo) {
 if (expo <= 1) {
  return base;
 }

 return base * RecursiveExponent(base, expo - 1);
}

console.log(RecursiveExponent(7, 3));
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

// function loopMultiplier(arr, num){
//   for(let i=0; i<arr.length; i++){
//     // console.log(val)
//     arr[i] *=  num
//     console.log(arr)
//   }
//   return arr
// }
// console.log(loopMultiplier([3, 5, 2, 1], 3))

function recursiveMultiplier(arr, num) {
 let newArr = [];
 function mult() {
  if (arr.length === 0) {
   return;
  }
  // console.log(arr)
  newArr.push(arr[0] * num);
  arr.shift();
  return mult(arr, num);
 }
 mult();
 return newArr;
}
console.log(recursiveMultiplier([3, 5, 2, 1], 3));
// console.log(recursiveMultiplier([3, 5, 2, 1], 3))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
 let newArr = [];
 function anotherF(orderedArr) {
  if (arr.length === 0) {
   return;
  }
  newArr.push(arr.pop());
  console.log(arr);
  return anotherF(arr);
 }
 anotherF(arr);

 return newArr;
}
arr = [10, 9, 8, 7, 6, 5];
recursiveReverse(arr);
// function recursiveReverse(arr){
//   let newArr = []
//   for(let i=arr.length-1; i>=0; i--){
//     newArr.push(arr[i])
//   }
//   console.log(newArr)
// }

// recursiveReverse([10, 9, 8, 7, 6, 5])
