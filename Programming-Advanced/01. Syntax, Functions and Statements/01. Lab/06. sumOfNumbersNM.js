function sumOfNumbersNM(n, m) {
    let newN = Number(n);
    let newwM = Number(m);
    let sum = 0;
    for (let i = newN; i <= newwM; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');