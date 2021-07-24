function selectionSort(arr) {

    for(let i=0; i<arr.length; i++){
        let minI = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minI]){
                minI = j;
            }
        }
        [arr[i], arr[minI]] = [arr[minI], arr[i]];
        console.log('swap: ', arr)
    }
    console.log(arr);
    return arr;
}

selectionSort([6, 9, 2, 5, 4, 1]);