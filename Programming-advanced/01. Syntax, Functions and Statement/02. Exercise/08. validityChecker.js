function validityChecker(x1, y1, x2, y2) {
    let res = (x1, y1, x2, y2) => {
        let number = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (Number.isInteger(number)) {
            return "valid";
        } else {
            return "invalid";
        }
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${res(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${res(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${res(x1, y1, x2, y2)}`);
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);