function carToGo(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let price = 0;

    if (budget <= 100) {
        if (season === "Summer") {
            price = 0.35 * budget;
            console.log(`Economy class`);
            console.log(`Cabrio - ${price.toFixed(2)}`);
        } else if (season === "Winter") {
            price = 0.65 * budget;
            console.log(`Economy class`);
            console.log(`Jeep - ${price.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 500) {
        if (season === "Summer") {
            price = 0.45 * budget;
            console.log(`Compact class`);
            console.log(`Cabrio - ${price.toFixed(2)}`);
        } else if (season === "Winter") {
            price = 0.80 * budget;
            console.log(`Compact class`);
            console.log(`Jeep - ${price.toFixed(2)}`);
        }
    } else if (budget > 500) {
        if (season === "Summer") {
            price = 0.90 * budget;
            console.log(`Luxury class`);
            console.log(`Jeep - ${price.toFixed(2)}`);
        } else if (season === "Winter") {
            price = 0.90 * budget;
            console.log(`Luxury class`);
            console.log(`Jeep - ${price.toFixed(2)}`);
        }
    }
}
carToGo(["450", "Summer"]);