function equalPairs(input) {
    const pair = Number(input[0]);
    const firstSum = Number(input[1]) + Number(input[2]);
    let currentSum = 0;
    let diff = 0;
    let maxDiff = 0;
    let isEqual = false; 

    if (pair === 1) {
        console.log(`Yes, value=${firstSum}`);
    } else {
    for (let i = 3; i <= 2 * pair; i += 2) {
        currentSum = +input[i] + +input[i + 1];

        if (firstSum === currentSum) {
            isEqual = true;
        } else {
            diff = Math.abs(+input[i - 2] + +input[i - 1] - currentSum);
        }
        if (diff >= maxDiff) {
            maxDiff = diff;
        } 
        }
    if (isEqual === false) {
        console.log(`No, maxdiff=${maxDiff}`);
    } else {
        console.log(`Yes, value=${firstSum}`);
    }
    }
}
equalPairs(["1", "5", "5"]);