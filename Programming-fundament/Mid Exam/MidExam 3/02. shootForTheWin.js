function shootForTheWin(arr) {
    let shotsTarget = arr.shift().split(" ").map(Number);
    let counter = 0;
    let index = 0;
    let commonNum = arr[index];
    index++;
    isFinish = false;

    while (commonNum !== 'End') {
        if (commonNum === 'End') {
            isFinish = true;
            break;
        } else {
            commonNum = Number(commonNum);
        }

        if (shotsTarget.length > commonNum) {
            let buffer = Number(shotsTarget[commonNum]);
            shotsTarget.splice(commonNum, 1, -1);
            counter++;

            for (let i = 0; i < shotsTarget.length; i++) {
                let commonEl = Number(shotsTarget[i]);
                let newValue;
                if (i === commonNum) {
                    continue;
                } 
                
                if (commonEl === -1) {
                    continue;
                }
                
                if (shotsTarget[i] > buffer) {
                    newValue = commonEl - buffer;
                    shotsTarget.splice(i, 1, newValue);
                } else {
                    newValue = commonEl + buffer;
                    shotsTarget.splice(i, 1, newValue);
                }
            }

        } else {
            commonNum = arr[index];
            index++;
            continue;
        }
        commonNum = arr[index];
        index++;
    }
    if (!isFinish) {
        console.log(`Shot targets: ${counter} -> ${shotsTarget.join(' ')}`);
    }
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);