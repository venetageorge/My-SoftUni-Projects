function orders(drinkType, quantity) {
    let total = 0;
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    switch (drinkType) {
        case 'coffee':
        total = quantity * coffeePrice;
        break;
        case 'coke':
        total = quantity * cokePrice;
        break;
        case 'water':
        total = quantity * waterPrice;
        break;
        case 'snacks':
        total = quantity * snacksPrice;
        break;
    }
    console.log(total.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);