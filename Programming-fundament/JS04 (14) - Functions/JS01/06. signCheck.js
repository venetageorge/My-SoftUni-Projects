function signCheck(num1, num2, num3) {
    let totalNegative = 0;

    if (checkIsNegative(num1)) {
        totalNegative++;
    }
    if (checkIsNegative(num2)) {
        totalNegative++;
    }
    if (checkIsNegative(num3)) {
        totalNegative++;
    }

    if (totalNegative % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
    function checkIsNegative(number) {
        return number < 0;
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);