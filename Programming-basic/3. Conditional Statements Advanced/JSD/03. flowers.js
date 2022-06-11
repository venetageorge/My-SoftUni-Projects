function flowers(input) {
    const countOfChrysanthemum = Number(input[0]);
    const countOfRoses = Number(input[1]);
    const countOfTulip = Number(input[2]);
    const season = input[3];
    const holiday = input[4]; 
    const chrysanthemumSpringSummerPrice = 2;
    const chrysanthemumAutumnWinterPrice = 3.75;
    const rosesSpringSummerPrice = 4.10;
    const rosesAutumnWinterPrice = 4.50;
    const tulipSpringSummerPrice = 2.50;
    const tulipAutumnWinterPrice = 4.15;
    let totalPrice = 0;
    let totalCount = 0;

    switch(season) {
    case("Spring"):
    case("Summer"):
    totalPrice = countOfChrysanthemum * chrysanthemumSpringSummerPrice + countOfRoses * rosesSpringSummerPrice + 
    countOfTulip * tulipSpringSummerPrice;
    totalCount = countOfChrysanthemum + countOfRoses + countOfTulip;
    if (holiday === "Y") {
        totalPrice = totalPrice + (0.15 * totalPrice);
    }
    if (countOfTulip > 7 && season === "Spring") {
        totalPrice = totalPrice - (0.05 * totalPrice);
    } 
    if (totalCount > 20) {
        totalPrice = totalPrice - (0.20 * totalPrice);
    } 
    console.log((totalPrice + 2).toFixed(2));
    break;

    case("Winter"):
    case("Autumn"):
    totalPrice = countOfChrysanthemum * chrysanthemumAutumnWinterPrice + countOfRoses * rosesAutumnWinterPrice + 
    countOfTulip * tulipAutumnWinterPrice;
    totalCount = countOfChrysanthemum + countOfRoses + countOfTulip;
    if (holiday === "Y") {
        totalPrice = totalPrice + (0.15 * totalPrice);
    } 
    if (countOfRoses >= 10 && season === "Winter") {
        totalPrice = totalPrice - (0.10 * totalPrice);
    }
    if (totalCount > 20) {
        totalPrice = totalPrice - (0.20 * totalPrice);
    }
    console.log((totalPrice + 2).toFixed(2));
    break;
    }
}
flowers(["2", "4", "8", "Spring", "Y"])