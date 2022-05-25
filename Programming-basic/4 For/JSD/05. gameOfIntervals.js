function gameOfIntervals(input) {
    let count = Number(input[0]);
    let first = 0
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    let invalid = 0;
    let sum = 0;

    for (let i = 1; i <= count; i++) {
        let num = Number(input[i]);
        
        if (num >= 0 && num <= 9) {
            sum += 0.2 * num;
            first++;
        } else if (num >= 10 && num <= 19) {
            sum += 0.3 * num;
            second++;
        } else if (num >= 20 && num <= 29) {
            sum += 0.4 * num;
            third++;
        } else if (num >= 30 && num <= 39) {
            sum += 50;
            fourth++;
        } else if (num >= 40 && num <= 50) {
            sum += 100;
            fifth++;
        } else {
            sum = sum / 2;
            invalid++
        }
        percentFirst = first / count * 100;
        percentSecond = second / count * 100;
        percentThird = third / count * 100;
        percentFourth = fourth / count * 100;
        percentFifth = fifth / count * 100;
        percentInvalid = invalid / count * 100;
    }
    console.log(`${sum.toFixed(2)}`);
    console.log(`From 0 to 9: ${percentFirst.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentSecond.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentThird.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentFourth.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentFifth.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalid.toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);