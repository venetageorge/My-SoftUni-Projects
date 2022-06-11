function vacation(input){
    const budget = Number(input[0]);
    const season = input[1];
    let price = 0;

    switch(season){
        case("Summer"): 
        if (budget <= 1000) {
            price = 0.65 * budget;
            console.log(`Alaska - Camp - ${price.toFixed(2)}`);
        } else if (budget > 1000 && budget <= 3000){
            price = 0.80 * budget;
            console.log(`Alaska - Hut - ${price.toFixed(2)}`);
        } else if (budget > 3000) {
            price = 0.90 * budget;
            console.log(`Alaska - Hotel - ${price.toFixed(2)}`);
        }
        break;
        case("Winter"):
        if (budget <= 1000) {
            price = 0.45 * budget;
            console.log(`Morocco - Camp - ${price.toFixed(2)}`);
        } else if (budget > 1000 && budget <= 3000){
            price = 0.60 * budget;
            console.log(`Morocco - Hut - ${price.toFixed(2)}`);
        } else if (budget > 3000) {
            price = 0.90 * budget;
            console.log(`Morocco - Hotel - ${price.toFixed(2)}`);
        }
        break;
    }
}
vacation(["800", "Summer"])