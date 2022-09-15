function mathOperations(num1, num2, str) {
    let res;

    if (str === '+') {
        res = num1 + num2;
    } else if (str === '-') {
        res = num1 - num2;
    } else if (str === '*') {
        res = num1 * num2;
    } else if (str === '/') {
        res = num1 / num2;
    } else if (str === '%') {
        res = num1 % num2;
    } else if (str === '**') {
        res = num1** num2;
    } 
    console.log(res);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');