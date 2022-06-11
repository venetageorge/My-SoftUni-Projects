function bills(input) {
    let monthCount = Number(input[0]);
    let acDcSumTotal = 0;
    let waterTax = 20;
    let internetTax = 15;

    for (let i = 1; i <= monthCount; i++) {
        let acDcSum = Number(input[i]);
        acDcSumTotal += acDcSum;
    }
    waterSum = waterTax * monthCount;
    internetSum = internetTax * monthCount;
    otherSum = acDcSumTotal + waterSum + internetSum;
    otherSum += 0.2 * otherSum;
    averageSum = (acDcSumTotal + waterSum + internetSum + otherSum) / monthCount;

    console.log(`Electricity: ${acDcSumTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterSum.toFixed(2)} lv`);
    console.log(`Internet: ${internetSum.toFixed(2)} lv`);
    console.log(`Other: ${otherSum.toFixed(2)} lv`);
    console.log(`Average: ${averageSum.toFixed(2)} lv`);
}
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);