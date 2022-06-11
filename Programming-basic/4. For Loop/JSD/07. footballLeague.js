function footballLeague(input) {
    let capacityStadium = Number(input[0]);
    let fanSum = Number(input[1]);
    let secA = 0;
    let secB = 0;
    let secV = 0;
    let secG = 0;

    for (let i = 2; i <= fanSum + 1; i++) {
        let sector = input[i];

        switch (sector) {
            case "A":
            secA++;
            break;
            case "B":
            secB++;
            break;
            case "V":
            secV++;
            break;
            case "G":
            secG++;
            break;
        }
    }
    secA = (secA / fanSum) * 100;
    secB = (secB / fanSum) * 100;
    secV = (secV / fanSum) * 100;
    secG = (secG / fanSum) * 100;
    percent = fanSum / capacityStadium * 100;
    console.log(`${secA.toFixed(2)}%`);
    console.log(`${secB.toFixed(2)}%`);
    console.log(`${secV.toFixed(2)}%`);
    console.log(`${secG.toFixed(2)}%`);
    console.log(`${percent.toFixed(2)}%`);
}
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);