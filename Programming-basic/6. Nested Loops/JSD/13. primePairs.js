function primePairs(input) {
    let startValueFirstPair = Number(input[0]);
    let startValueSecondPair = Number(input[1]);
    let differenceFirstPair = Number(input[2]);
    let differenceSecondPair = Number(input[3]);
    let allRes = "";
    let res = "";

    let endValueFirstPair = startValueFirstPair + differenceFirstPair;
    let endValueSecondPair = startValueSecondPair + differenceSecondPair;

    for (let i = startValueFirstPair; i <= endValueFirstPair; i++) {
        for (let j = startValueSecondPair; j <= endValueSecondPair; j++) {
            allRes += `${i}${j}`;
            if (i === 11 || i === 13 || i === 17 || i === 19 || i === 23 || i === 31 || i === 37 || i === 41 || i === 43 || i === 47 || i === 53 || i === 59 || i === 61 || i === 67 || i === 71 || i === 73 || i === 79 || i === 83 || i === 89 || i === 91 || i === 97) {
                if (j === 11 || j === 13 || j === 17 || j === 19 || j === 23 || j === 31 || j === 37 || j === 41 || j === 43 || j === 47 || j === 53 || j === 59 || j === 61 || j === 67 || j === 71 || j === 73 || j === 79 || j === 83 || j === 89 || j === 91 || j === 97) {
                    res += `${i}${j}\n`;
                }
            }
        }
    }
    console.log(res);
}
primePairs(["13", "22", "4", "2"]);