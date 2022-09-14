function aggregateElements(arr) {
    let firstSum = arr.reduce((a, b) => a + b, 0);
    let secondSum = arr.map(x => 1 / x).reduce((a, b) => a + b, 0);
    let thirdSum = arr.join("");

    console.log(firstSum);
    console.log(secondSum);
    console.log(thirdSum);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);