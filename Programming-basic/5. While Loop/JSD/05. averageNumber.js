function averageNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[index]);
        index++;
        sum += num / n;
    }
    console.log(sum.toFixed(2));
}
averageNumber(["3", "82", "43", "22"]);