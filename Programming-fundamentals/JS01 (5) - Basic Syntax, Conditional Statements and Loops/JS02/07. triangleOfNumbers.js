function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let k = 1; k <= i; k++) {
            str += `${i} `;
        }
        console.log(str);
    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);