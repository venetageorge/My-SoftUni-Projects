function biggestElement(arr) {
    let myArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        myArr = myArr.concat(arr[i]);
    }
    let res = Math.max(...myArr);
    return res;
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));