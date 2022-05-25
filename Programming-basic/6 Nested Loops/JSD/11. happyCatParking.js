function happyCatParking(input) {
    let index = 0;
    let total = 0;
    let countDays = Number(input[index]);
    index++;
    let hours = Number(input[index]);
    
    for (let i = 1; i <= countDays; i++) {
        let price = 0;
        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 !== 0) {
                price += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price += 1.25;
            } else {
                price += 1;
            }

        }
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);

        total += price;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCatParking(["5", "2"]);