function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = '';

    for (let index = firstNum; index <= secondNum; index++) {
        let currentNum = "" + index;
        let odd = 0;
        let even = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let current = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                even += current;
            } else {
                odd += current;
            }
        }
        if (odd === even) {
            printLine += `${index} `
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000", "100050"]);