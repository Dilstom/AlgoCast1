function partition(arr, start=0, end=arr.length) {
    let pivot = arr[start];
    j = start;
    console.log('start and end: ', start, end);
    for(let i=start + 1; i<end; i++) {
        if(arr[i] <= pivot) {
            j++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
            // console.log('arr', arr);
        }
    }
    [arr[start], arr[j]] = [arr[j], arr[start]];
    console.log('final arr, j ', arr, j);
    return j;
}

// partition([4, 8, 2, 1, 5, 7, 6, 3], 0, 8);

function quickSort(arr, start=0, end=arr.length) {
    if(start >= end) return;

    let m = partition(arr, start, end);
    console.log('m: ', m);
    // left side
    quickSort(arr, start, m);
    // right side
    quickSort(arr, m+1, arr.length);

    console.log('result: ', arr);
    return arr;
}

quickSort([100,0,4,6,9,1,2,5,3]);

// COLT'S SOLUTION
// function partition(arr, start=0, end=arr.length){
//     let pivot = arr[start];
//     let j = start;

//     for(let i=start+1; i<end; i++){
//         if(pivot>arr[i]){
//             j++;
//             [arr[j], arr[i]] = [arr[i], arr[j]];
//         }
//     }
//     [arr[start], arr[j]] = [arr[j], arr[start]];
//     return j;
// }

// function quickSort(arr, start=0, end=arr.length) {
//     if(start < end) {
//     let m = partition(arr, start, end);
//     quickSort(arr, start, m);
//     quickSort(arr, m+1, arr.length)
// }
// console.log('result arr: ', arr)
// return arr;
// }

// quickSort([100,0,4,6,9,1,2,5,3]);