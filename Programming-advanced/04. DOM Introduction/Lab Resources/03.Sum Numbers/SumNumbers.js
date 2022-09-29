function calc() {
        let firstNumber = document.getElementById("num1").value;
        let secondNumber = document.getElementById("num2").value;
        let text = document.getElementById("sum");
        text.value = Number(firstNumber)  + Number(secondNumber);
}
