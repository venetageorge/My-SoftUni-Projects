function fuelTank(input) {
    const typeOfFuel = input[0];
    const amountFuel = Number(input[1]); 
    let havingClubCard = input[2]; 
    let gasolinePrice = 2.22; 
    let dieselPrice = 2.33; 
    let gasPrice = 0.93; 

    if (havingClubCard === "Yes") {
        gasolinePrice -= 0.18;
        dieselPrice -= 0.12;
        gasPrice -= 0.08;
    }

    if (typeOfFuel === "Gas") {
        if (amountFuel > 20 && amountFuel <= 25) {
            gasPrice = amountFuel * (gasPrice - (0.08 * gasPrice));
            console.log(`${gasPrice.toFixed(2)} lv.`);
        } else if (amountFuel > 25) {
            gasPrice = amountFuel * (gasPrice - (0.1 * gasPrice));
            console.log(`${gasPrice.toFixed(2)} lv.`);
        } else {
            gasPrice = amountFuel * gasPrice;
            console.log(`${gasPrice.toFixed(2)} lv.`);
        }
    }

    if (typeOfFuel === "Gasoline") {
        if (amountFuel > 20 && amountFuel <= 25) {
            gasolinePrice = amountFuel * (gasolinePrice - (0.08 * gasolinePrice));
            console.log(`${gasolinePrice.toFixed(2)} lv.`);
        } else if (amountFuel > 25) {
            gasolinePrice = amountFuel * (gasolinePrice - (0.1 * gasolinePrice));
            console.log(`${gasolinePrice.toFixed(2)} lv.`);
        } else {
            gasolinePrice = amountFuel * gasolinePrice;
            console.log(`${gasolinePrice.toFixed(2)} lv.`);
        }
    }
        
    if (typeOfFuel === "Diesel") {
        if (amountFuel > 20 && amountFuel <= 25) {
            dieselPrice = amountFuel * (dieselPrice - (0.08 * dieselPrice));
            console.log(`${dieselPrice.toFixed(2)} lv.`);
        } else if (amountFuel > 25) {
            dieselPrice = amountFuel * (dieselPrice - (0.1 * dieselPrice));
            console.log(`${dieselPrice.toFixed(2)} lv.`);
        } else {
            dieselPrice = amountFuel * dieselPrice;
            console.log(`${dieselPrice.toFixed(2)} lv.`);
        }
    }
}
fuelTank(["Gasoline", "25", "No"]);