/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

// nested loops - O(n^2)

function bubbleSort(list) {
 // loop over list
 for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list.length - i; j++) {
   console.log(list[j]);
   if (list[j] > list[j + 1]) {
    [list[j], list[j + 1]] = [list[j + 1], list[j]];
   }
  }
 }
 return list;
}

console.log(bubbleSort([3, 5, 6, 23, 323, 42, 1, 2, 4]));

// recursive

let newArr = [];
function bubbleSort(list) {
 // loop over list
 let newL = list.slice();
 if (newL.length === 0) {
  return;
 }
 for (let i = 0; i < newL.length; i++) {
  if (newL[i] > newL[i + 1]) {
   [newL[i], newL[i + 1]] = [newL[i + 1], newL[i]];
  }
 }
 newArr.unshift(newL.pop());
 bubbleSort(newL);
 return newArr;
}

bubbleSort([3, 5, 6, 23, 323, 42, 1, 2, 4]);
