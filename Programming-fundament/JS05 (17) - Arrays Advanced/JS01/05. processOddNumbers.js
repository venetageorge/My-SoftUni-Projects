function processOddNumbers(arr) {
    let filteredElement = arr.filter((element, i) => i % 2 == 1);
    let doppelt = filteredElement.map( x => x * 2);
    let reversedNum = doppelt.reverse();
    console.log(reversedNum.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);