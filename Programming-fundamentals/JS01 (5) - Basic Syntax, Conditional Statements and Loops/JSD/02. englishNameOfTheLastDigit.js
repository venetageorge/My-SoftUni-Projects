function englishNameOTheLastDigit(num) {
    let str = num.toString();
    let sliced = str.slice(-1);
    let last = Number(sliced);
    let text = '';

    if (last == 1) {
        text = "one";
    } else if (last == 2) {
        text = "two";
    } else if (last == 3) {
        text = "three";
    }  else if (last == 4) {
        text = "four";
    } else if (last == 5) {
        text = "five";
    } else if (last == 6) {
        text = "six";
    } else if (last == 7) {
        text = "seven";
    } else if (last == 8) {
        text = "eight";
    } else if (last == 9) {
        text = "nine";
    } else {
        text = "zero";
    }
    console.log(text);
}
englishNameOTheLastDigit(512);
englishNameOTheLastDigit(1);
englishNameOTheLastDigit(1643);