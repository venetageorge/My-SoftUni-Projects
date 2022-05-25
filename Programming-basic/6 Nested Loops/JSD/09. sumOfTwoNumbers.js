function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let res1 = "";
    let res2 = "";
    let sum = 0;
    isFound = false;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            sum = i + j;
            counter++;
            if (sum === magicNum) {
                isFound = true;
                res1 = `${i}`;
                res2 = `${j}`;
                break;
            }
        }
        if (isFound) {
        break;
        }
    }
    if (isFound) {
    console.log(`Combination N:${counter} (${res1} + ${res2} = ${magicNum})`);
    } else {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", "888", "2000"]);