function equalPairs(arr) {
    let equalPairs = 0

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j == arr.length - 1) {
                break
            };
            if (arr[j][i] == arr[j + 1][i]) {
                equalPairs++;
            }
        }
    }
    for (let k = 0; k < arr.length; k++) {
        for (let n = 0; n < arr[k].length; n++) {
            if (arr[k][n] == arr[k][n + 1]) {
                equalPairs++
            }
        }
    }
    return equalPairs
}
console.log(equalPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(equalPairs([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));