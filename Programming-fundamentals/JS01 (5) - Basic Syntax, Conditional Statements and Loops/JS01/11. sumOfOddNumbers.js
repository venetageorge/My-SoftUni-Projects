function sumOfOddNumbers(n) {
    let firstableNum = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        console.log(firstableNum);
        sum += firstableNum;
        firstableNum += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);