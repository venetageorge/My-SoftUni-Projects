function fuelTank(input) {
    const typeOfFuel = input[0];
    let fuelLitters = Number(input[1]);

    if (fuelLitters >= 25) {
    switch (typeOfFuel) {
        case "Diesel": 
        case "Gas": 
        case "Gasoline":
        console.log(`You have enough ${(typeOfFuel).toLowerCase()}.`);
        break;
        default: 
        console.log(`Invalid fuel!`);
        } 
    } else {
        switch (typeOfFuel) {
        case "Diesel": 
        case "Gas": 
        case "Gasoline":
        console.log(`Fill your tank with ${(typeOfFuel).toLowerCase()}!`);
        break;
        default: 
        console.log(`Invalid fuel!`);
        }
    }
}
fuelTank(["Gas", "25"]);