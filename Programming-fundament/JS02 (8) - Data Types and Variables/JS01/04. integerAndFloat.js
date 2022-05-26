function integerAndFloat(num1, num2, num3) {
    let res = num1 + num2 + num3;
    res % 1 === 0 ? res += ' - Integer' : res += ' - Float';
    console.log(res);

    // Second solution: 
    // let type = "";
    // if (res % 1 === 0) {
    //     type = "Integer";
    //     console.log(`${res} - ${type}`);
    // } else {
    //     type = "Float";
    //     console.log(`${res} - ${type}`);
    // }

    // Third solution:
    // let res = (num1 + num2 + num3);
    // let sum = res.toString();
    // let isFloat = false;
    // for (let i = 0; i < sum.length; i++) {
    //     let currentChar = sum[i];
    //     if (currentChar === ".") {
    //         isFloat = true;
    //     } 
    // }
    // console.log(`${sum} - ${isFloat 
    // ? "Float" 
    // : "Integer"}`);

    // Fourth solution: 
    // let res = (num1 + num2 + num3);
    // console.log(`${res} - ${parseInt(res) === res 
    // ? "Integer" 
    // : "Float"}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);