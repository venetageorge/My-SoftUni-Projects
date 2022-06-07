function nonDecreasingSubset(arr) {
    let newArr = [];
    let first = arr[0];
    newArr.push(first);

    for (let i = 1; i < arr.length; i++) {
            let second = arr[i];

            if (first <= second) {
                first = second;
                newArr.push(second);
            } 
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);