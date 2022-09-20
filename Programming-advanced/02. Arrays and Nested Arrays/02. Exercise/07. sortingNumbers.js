function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => b - a);

    for (let i = 0; i < sortedArr.length; i++) {
        if (i % 2 == 0) {
            let min = sortedArr.pop();
            sortedArr.splice(i, 0, min);
        }
    }
    return sortedArr
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));