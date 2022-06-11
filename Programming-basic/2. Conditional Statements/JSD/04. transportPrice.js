function transportPrice(input) {
    const kmCount = Number(input[0]);
    const word = input[1]; 

    const taxiFirstTax = 0.7;
    const busTax = 0.09;
    const truckTax = 0.06;

    if (kmCount >= 20 && kmCount < 100) {
        let price = kmCount * busTax;
        console.log(`${price.toFixed(2)}`);
    } else if (kmCount >= 100) {
        let price = kmCount * truckTax;
        console.log(`${price.toFixed(2)}`);
    } else if (kmCount < 20 && word === "day") {
        let price = taxiFirstTax + (0.79 * kmCount);
        console.log(`${price.toFixed(2)}`);
    } else if (kmCount < 20 && word === "night") {
        let price = taxiFirstTax + (0.9 * kmCount);
        console.log(`${price.toFixed(2)}`);
    }
}
transportPrice(["180", "night"]);