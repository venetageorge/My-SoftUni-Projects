function birthdayParty(arg1) {
    let rent = Number(arg1);
    let cakePrice = 0;
    let drinksPrice = 0;
    let animator = 0;

    cakePrice = 0.2 * rent;
    drinksPrice = cakePrice - 0.45 * cakePrice;
    animator = rent / 3; 

    let total = rent + cakePrice + drinksPrice + animator;
    console.log(total);
}
birthdayParty([2250]);