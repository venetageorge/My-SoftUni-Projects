function addAndSubtract(first, second, third) {
    let sumFirstAndSecond = sum (first, second);
    let finalResult = substract(sumFirstAndSecond, third)

    function sum (first, second) {
        return first + second;
    }

    function substract (sumFirstAndSecond, thirdNum) {
        return sumFirstAndSecond - thirdNum;
    }

    console.log(finalResult);
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);