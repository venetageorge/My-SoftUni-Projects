function equalPairs(input) {
    let index = 0;
    let pair = Number(input[index++]);
    let firstSum = 0;
    let secondSum = 0;
    let totalSum = 0;
    let diff = 0;
    let min = 100; 
    let max = -100;
    let min1 = 0;
    let max1 = 0;
    
    for (let i = 0; i < pair; i++) {
        firstSum = Number(input[index++]);
        secondSum = Number(input[index++]);
        sum = firstSum + secondSum;

        if (sum > max) {
            max = sum;
        } else if (sum < max) {
            max1 = sum
        }
        if (sum < min) {
            min = sum;
        } else if (sum > min) {
            min1 = sum;
        }
    }
    diff = Math.abs(min - max);
    let diffNum = Math.abs(min1 - max1);
    if (min === max) {
        console.log(`Yes, value=${min}`);
    } else {
        if (diff > diffNum && pair > 3) {
        console.log(`No, maxdiff=${diffNum}`);
        } else {
        console.log(`No, maxdiff=${diff}`);
        }
    }
}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);