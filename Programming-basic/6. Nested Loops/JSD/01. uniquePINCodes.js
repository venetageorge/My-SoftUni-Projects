function uniquePINCodes(input) {
    let upLimitFirstNum = Number(input[0]);
    let upLimitSecondNum = Number(input[1]);
    let upLimitThirdNum = Number(input[2]);
    let res = "";

    for (let i = 1; i <= upLimitFirstNum; i++) {
        for (let j = 1; j <= upLimitSecondNum; j++) {
            for (let k = 1; k <= upLimitThirdNum; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    if (j === 2 || j === 3 || j === 5 || j ===7) {
                        res += `${i} ${j} ${k}\n`;
                    }
                }
            }
        }
    }
    console.log(`${res}`);
}
uniquePINCodes(["3", "5", "5"]);