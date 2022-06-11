function lettersCombinations(input) {
    let startSmallLetter = input[0];
    let finishSmallLetter = input[1];
    let escapeLetter = input[2];

    let charFirst = Number(startSmallLetter.charCodeAt());
    let charSecond = Number(finishSmallLetter.charCodeAt());
    let charThird = Number(escapeLetter.charCodeAt());
    let res = "";
    let counter = 0;

    for (let i = charFirst; i <= charSecond; i++) {
        for (let j = charFirst; j <= charSecond; j++) {
            for (let k = charFirst; k <= charSecond; k++) {
                if (i === charThird || j === charThird || k === charThird) {
                    continue;
                } else {
                    counter++;
                    let letterFirst = String.fromCharCode(i);
                    let letterSecond = String.fromCharCode(j);
                    let letterThird = String.fromCharCode(k);
                    res += `${letterFirst}${letterSecond}${letterThird} `;
                }
            }
        }
    }
    console.log(`${res}${counter}`);

}
lettersCombinations(["a", "c", "z"]);