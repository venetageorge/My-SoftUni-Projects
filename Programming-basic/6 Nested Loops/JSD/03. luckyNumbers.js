function luckyNumbers(input) {
    let num = Number(input[0]);
    let end = 9;
    let res = "";
     
        for (let i = 1; i <= num; i++) {
            if (i > 9) {
                continue;
            }
            for (let j = 1; j <= num; j++) {
                if (j > 9) {
                    continue;
                }
                for (let k = 1; k <= num; k++) {
                    if (k > 9) {
                        continue;
                    }
                    for (let l = 1; l <= num; l++) {
                        if (l > 9) {
                            continue;
                        }
                        if (i + j === k + l) {
                            if (num % (i + j) === 0 && num % (k + l) === 0) {
                                res += `${i}${j}${k}${l} `;
                                break;
                            }                             
                        }
                    }
                } 
            }
        } 
    console.log(res);
}
luckyNumbers(["7"]);