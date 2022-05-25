function logistics(input) {
    let cargoCount = Number(input[0]);
    let total = 0;
    let middle = 0;
    let busCount = 0;
    let truckCount = 0;
    let trainCount = 0;

    for (let i = 1; i <= cargoCount; i++) {
        let cardgo = Number(input[i]);
        
        if (cardgo <= 3) {
            busCount += cardgo;
        } else if (cardgo >= 4 && cardgo <= 11) {
            truckCount += cardgo;
        } else if (cardgo >= 12) {
            trainCount += cardgo;
        }
        total += cardgo;
    }
    middle = (busCount * 200 + truckCount * 175 + trainCount * 120) / total;
    percent1 = busCount / total * 100;
    percent2 = truckCount / total * 100;
    percent3 = trainCount / total * 100;
    console.log(`${middle.toFixed(2)}`);
    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
}
logistics(["5", "2", "10", "20", "1", "7"]);