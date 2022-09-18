function processOddPositions(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    let res = newArr.map(n => n * 2);
    let reversed = res.reverse();
    console.log(reversed.join(' '));
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);