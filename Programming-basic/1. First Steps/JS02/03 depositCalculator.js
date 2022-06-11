function depositCalculator(input) {
    const depositSum = Number(input[0]);
    const period = Number(input[1]);
    const percent = Number(input[2]);
    const interst = (depositSum * percent) / 100;
    const interestPerMonath = interst / 12;
    const finalSum = depositSum + period * interestPerMonath;
    console.log(finalSum);
}
depositCalculator(["200 ","3 " , "5.7 "]);