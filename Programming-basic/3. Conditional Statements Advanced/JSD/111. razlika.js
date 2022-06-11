function leftAndRightSum(input) {
    let n = Number(input[0]);
    let leftSum = 0; 
    let rightSum = 0; 

    for (let i = 1; i <= n; i++) {
        leftSum += Number(input[i]);
    } 
    for (let i = n + 1; i <= 2 * n; i++) {
        rightSum += Number(input[i]);
    } 
    let sumDifference = Math.abs(leftSum - rightSum);
    let result = "";
    result = (sumDifference == 0) ? `Yes, sum = ${rightSum}` : `No, diff = ${sumDifference}`;
    console.log(result);
}
leftAndRightSum(["2", "10", "90", "60", "40"]);