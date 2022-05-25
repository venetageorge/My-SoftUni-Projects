function addBags(input) {
    let priceUp20Kg = Number(input[0]);
    let kgBaggage = Number(input[1]);
    let daysTrip = Number(input[2]);
    let countOfBaggage = Number(input[3]);
    let price = 0;

    if (kgBaggage < 10) {
        price = priceUp20Kg * 0.2;
    } else if (kgBaggage >= 10 && kgBaggage <= 20) {
        price = priceUp20Kg * 0.5;
    } else {
        price = priceUp20Kg;
    }

    if (daysTrip > 30) {
        price = price + 0.1 * price;
    } else if (daysTrip >= 7 && daysTrip <= 30) {
        price = price + 0.15 * price;
    } else if (daysTrip < 7) {
        price = price + 0.4 * price;
    } 
    let totalPrice = price * countOfBaggage;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags(["63.80", "23", "3", "1"]);