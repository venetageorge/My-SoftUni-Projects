function numberPyramid(input) {
    let n = Number(input[0]);
    let currNum = 0;
    isEqual = false; 

    for (let rows = 1; rows <= n; rows++) {
        let printLine = "";
        for (let cols = 1; cols <= rows; cols++) {
            currNum++;
            printLine += currNum + " ";
            if (currNum === n) {
                isEqual = true;
                break;
            }
        }
        console.log(printLine);
        if (isEqual) {
            break;
        }
    }
}
numberPyramid(["7"]);