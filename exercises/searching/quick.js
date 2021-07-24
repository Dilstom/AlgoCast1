function partition(arr, start=0, end=arr.length) {
    let pivot = arr[start];
    j = start;

    for(let i=start + 1; i<end; i++) {
        if(arr[i] <= pivot) {
            j++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
            // console.log('arr', arr);
        }
    }
    [arr[start], arr[j]] = [arr[j], arr[start]];
    console.log('final arr, j ', arr, j)
    return j;
}

partition([4, 8, 2, 1, 5, 7, 6, 3], 0, 8);
