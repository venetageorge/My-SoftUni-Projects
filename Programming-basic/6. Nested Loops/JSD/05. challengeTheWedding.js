function challengeTheWedding(input) {
    let man = Number(input[0]);
    let woman = Number(input[1]);
    let maxTable = Number(input[2]);
    let res = "";

    for (let i = 1; i <= man; i++) {
        for (let j = 1; j <= woman; j++) {
            maxTable--;
            if (maxTable < 0) {
                break;
            }
        res += `(${i} <-> ${j}) `;
        }
    }
    console.log(res);
}
challengeTheWedding(["5", "8", "40"]);