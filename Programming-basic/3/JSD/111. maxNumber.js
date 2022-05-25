function maxNumber(input) {
    let n = Number(input[0]);
    let max = Number(input[1]);

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        if (currentNum > max) {
            max = currentNum;
        }
    }
    console.log(max);
}
maxNumber(["4", "-45", "-20", "7", "-99"]);