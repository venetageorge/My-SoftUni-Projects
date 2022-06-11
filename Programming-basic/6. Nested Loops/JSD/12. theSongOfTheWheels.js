function theSongOfTheWheels(input) {
    let num = Number(input[0]);
    let res = "";
    let counter = 0;
    let isFound = false;
    let res4 = "";

        for (let a = 1; a <= 9; a++) {
            for (let b = 1; b <= 9; b++) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (a < b && c > d) {
                            if ((a * b + c * d) === num) {
                                counter++;
                                res += `${a}${b}${c}${d} `;
                                if (counter === 4) {
                                    isFound = true;
                                    res4 += `${a}${b}${c}${d}`;
                                    break;
                                }
                            } else {
                                isFound;
                            }
                        }
                    }
                }
            }
        }
        console.log(res);
        if (isFound === true) {
        console.log(`Password: ${res4}`);
        } else {
            console.log(`No!`);
        }
}
theSongOfTheWheels(["55"])