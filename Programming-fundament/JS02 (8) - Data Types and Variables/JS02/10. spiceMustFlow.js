function spiceMustFlow(startingYield) {
    let days = 0;
    let workers = 26;
    let total = 0;

    for (let i = 0; startingYield >= 100; i++) {
            days++;
            total += startingYield;
        if (total >= 26) {
            total -= workers;
        } else {
            break;
        }
        startingYield -= 10;
        if (startingYield < 100) {
            break;
        }
    }
    if (total >= 26) {
        total -= workers;
    } 
    console.log(days);
    console.log(total);
}
spiceMustFlow(111);
spiceMustFlow(450);