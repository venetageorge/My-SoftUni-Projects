function biggestOf3Numbers(num1, num2, num3) {
    let max = Number.MIN_SAFE_INTEGER;
    biggest = 0;

    if (num1 === num2 === num3) {
        biggest = num1;
    } else {

    if (num1 > max && num1 >= num2 && num1 >= num3) {
        biggest = num1;
    }
    if (num2 > max && num2 >= num1 && num2 >= num3) {
        biggest = num2;
    }
    if (num3 > max && num3 >= num1 && num3 >= num2) {
        biggest = num3;
    }
}
    console.log(biggest);
}
biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);
biggestOf3Numbers(2, 2, 2);
biggestOf3Numbers(5, -2, 7);