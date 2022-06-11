function secretDoorsLock(input) {
    let upLimitHundert = Number(input[0]);
    let upLimitTens = Number(input[1]);
    let upLimitOne = Number(input[2]);
    let res = "";

    for (let i = 1; i <= upLimitHundert; i++) {
        for (let j = 1; j <= upLimitTens; j++) {
            for (let k = 1; k <= upLimitOne; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    if (j === 2 || j === 3 || j === 5 || j === 7) {
                        res += `${i} ${j} ${k}\n`;
                    }
                }
            }
        }
    }
    console.log(res);
}
secretDoorsLock(["3", "5", "5"]);