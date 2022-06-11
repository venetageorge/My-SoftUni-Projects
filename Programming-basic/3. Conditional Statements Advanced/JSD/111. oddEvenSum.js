function oddEvenSum(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0; 

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            oddSum += Number(input[i]);
        } else {
            evenSum += Number(input[i]);
        }
    }
    if (oddSum === evenSum) {
        console.log("Yes");
        console.log("Sum = " + oddSum);
    } else {
        let difference = Math.abs(oddSum - evenSum);
        console.log("No\nDiff = " + difference);
    }
}
oddEvenSum(["4", "2", "-3", "11", "8"]);