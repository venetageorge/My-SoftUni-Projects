function truckDriver(input) {
    const season = input[0];
    const kmPerMonth = Number(input[1]);
    let price = 0;
    let priceAfterTax = 0;

    switch(season) {
        case ("Spring"):
        case ("Autumn"):
        if (kmPerMonth <= 5000) {
            price = kmPerMonth * 0.75;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            price = kmPerMonth * 0.95;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            price = kmPerMonth * 1.45;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        }
        break;
        case ("Summer"):
        if (kmPerMonth <= 5000) {
            price = kmPerMonth * 0.90;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            price = kmPerMonth * 1.10;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);        
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            price = kmPerMonth * 1.45;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        }
        break;
        case ("Winter"):
        if (kmPerMonth <= 5000) {
            price = kmPerMonth * 1.05;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            price = kmPerMonth * 1.25;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
            price = kmPerMonth * 1.45;
            priceAfterTax = 4 * (price - (0.10 * price));
            console.log(`${priceAfterTax.toFixed(2)}`);
        }
    }
}
truckDriver(["Summer", "3455"]);