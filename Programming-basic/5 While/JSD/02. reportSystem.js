function reportSystem(input) {
    let expectedMoney = Number(input[0]);
    let index = 1;
    let command = input[index];
    let cash = 0;
    let cashCount = 0;
    let card = 0;
    let cardCount = 0;
    let saveMoney = 0;

    while (command !== "End") {
        if (saveMoney >= expectedMoney) {
            break;
        }
        let sum = Number(command);
        if (index % 2 !== 0) {
            if (sum > 100) {
            console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cashCount++;
                cash += sum;
                saveMoney += sum;
            }
        } else {
            if (sum < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cardCount++;
                card += sum;
                saveMoney += sum;
            }
        }
    index++;
    command = input[index];
    }
    if (saveMoney >= expectedMoney) {
        let cashTotal = cash / cashCount;
        let cardTotal = card / cardCount;
        console.log(`Average CS: ${cashTotal.toFixed(2)}\nAverage CC: ${cardTotal.toFixed(2)}`);
    }

    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);