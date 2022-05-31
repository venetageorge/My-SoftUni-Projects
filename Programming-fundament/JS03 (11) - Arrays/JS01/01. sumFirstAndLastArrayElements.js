function sumFirstAndLastArrayElements(arr) {
    let firstOne = Number(arr[0]);
    let lastOne = Number(arr[arr.length - 1]);
    console.log(firstOne + lastOne);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);