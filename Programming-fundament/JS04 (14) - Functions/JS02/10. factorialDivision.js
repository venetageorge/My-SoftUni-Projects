function factorialDivision(num1, num2) {

    function one (first) {
        let firstSum = 1;
        for (let i = num1; i > 0; i--) {
            firstSum *= i;
        }
        return firstSum;
    }
    
    function two (second) {
        let secondSum = 1;
        for (let i = num2; i > 0; i--) {
            secondSum *= i;
        }
        return secondSum;
    }

    let firstable = one(num1);
    let secondable = two(num2);
    let sum = firstable / secondable;
    

    console.log(sum.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);