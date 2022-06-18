function firstAndLastKNumbers(arr) {
    let sumElements = arr.shift();

    let firstable = arr.slice(0, sumElements);
    let secondable = arr.slice(-sumElements);

    console.log(`${firstable.join(' ')}\n${secondable.join(' ')}`);
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);