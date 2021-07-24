// MERGE HELPER FUNCTION
//  - COLT'S SOLUTION 
// MERGESORT FUNTION    

// *** MERGE HELPER FUNCTION *** 
// function merge(arrA, arrB) {
//     console.log('merge arrays: ', arrA, arrB)
//     let newArr = [];
//     while(arrA.length > 0 && arrB.length > 0) {
//         if(arrA[0] <= arrB[0]){
//             newArr.push(arrA[0]);
//             arrA.splice(0, 1);
//             console.log('arrA: ', arrA)
//         }else{
//             newArr.push(arrB[0]);
//             arrB.splice(0, 1);
//             // console.log('arrB: ', arrB)
//         }
//     }
    // console.log('before concat: ', arrA, arrB);
    // newArr = newArr.concat(arrA, arrB);
    // console.log('newArr result', newArr);
//     return newArr;
// }

// merge([1,2,9], [4, 5, 10, 99]);

// COLT'S SOLUTION
function merge(arrA, arrB) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while(i < arrA.length && j < arrB.length) {
        if(arrA[i] <= arrB[j]){
            newArr.push(arrA[i]);
            i++;
            console.log('arrA: ', arrA);
        }else{
            newArr.push(arrB[j]);
            j++;
            console.log('arrB: ', arrB);
        }
    }
    while(i <arrA.length) {
        newArr.push(arrA[i]);
        i++
    }
    while(j <arrB.length) {
        newArr.push(arrB[j]);
        j++
    }
    console.log('newArr', newArr);
    return newArr;
}

// merge([1,2,9], [4, 5, 10, 99]);

// *** MERGESORT FUNTION ***
// function mergeSort(arr) {
//     console.log('arr here: ', arr)
//     if(arr.length <= 1){
//         return arr;
//     }

//     let center = Math.ceil(arr.length/2);

//     let arr1 = mergeSort(arr.slice(0, center));
//     let arr2 = mergeSort(arr.slice(center));
//     console.log('arr1: ', arr1);
//     console.log('arr2: ', arr2);
//     console.log(merge(arr1, arr2));
//     return merge(arr1, arr2);
// }

// mergeSort([5, 4, 34, 6, 0, 9, 34, 6]) 
// *** MERGESORT FUNTION ***
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let center = Math.floor(arr.length/2);

    let arr1 = mergeSort(arr.slice(0, center));
    let arr2 = mergeSort(arr.slice(center));
    console.log('arr1, arr2: ', arr1, arr2)
    console.log('final result: ', merge(arr1, arr2));
    return merge(arr1, arr2);

}

mergeSort([5, 4, 34, 6, 0, 9, 34, 6]) 