function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];

    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    let revArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        revArr.push(newArr[i]);
    }
    console.log(revArr.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);