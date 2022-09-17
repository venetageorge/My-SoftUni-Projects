function lastKNumbersSequence(n, k) {
    let newArr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);

        let part = newArr.slice(start);
        let sum = part.reduce((a, b) => a + b);
        newArr.push(sum)
    }
    return newArr;
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));