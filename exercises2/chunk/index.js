// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//  let newArr = [];

//  let chunk = [];
//  while (array.length > 0) {
//   chunk = array.slice(0, size);
//   newArr.push(chunk);
//   array.splice(0, size);
//   chunk = [];
//  }
//  //   console.log(chunk)
//  //   console.log('newArr', newArr)
//  return newArr;
// }

module.exports = chunk;

//  or shorter sol:
function chunk(arr, size) {
 let newArr = [];
 let i = 0;
 while (i < arr.length) {
  newArr.push(arr.slice(i, i + size));
  i += size;
 }

 return newArr;
}

// orig sol:
// function chunk(arr, size) {

//     let newArr = []
//     for(let el of arr){
//       let inChunk = newArr[newArr.length-1]
//       console.log(inChunk)
//       if(!inChunk || inChunk.length === size){
//         newArr.push([el])
//       }else{
//         inChunk.push(el)
//       }

//     }
//     console.log(newArr)
