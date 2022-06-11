function oddEvenPosition(input) {
    let index = 0;
    let countNum = Number(input[index++]);
    let evenSum = 0;
    let even = 0;
    let oddSum = 0;
    let odd = 0;
    let oddMax = -100;
    let evenMax = -100;
    let oddMin = 100;
    let evenMin = 100;

    for (let i = 1; i <= countNum; i++) {
        let num = Number(input[index++]);
        if (i % 2 === 0) {
            evenSum += num;
            even++
            if (num > evenMax) {
                evenMax = num;
            }
            if (num < evenMin) {
                evenMin = num;
            }
        } else {
            oddSum += num;
            odd++;
            if (num > oddMax) {
                oddMax = num;
            }
            if (num < oddMin) {
                oddMin = num;
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (odd === 0) {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (even === 0) {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);