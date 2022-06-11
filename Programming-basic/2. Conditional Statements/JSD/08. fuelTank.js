function fuelTank(input) {
    let typeOfFuel = input[0];
    const littersInTank = Number(input[1]);

    if (typeOfFuel === "Gas" && littersInTank >= 25) {
        console.log(`You have enough ${(typeOfFuel).toLowerCase()}.`);
    } else if (typeOfFuel === "Gas" && littersInTank < 25) {
        console.log(`Fill your tank with ${(typeOfFuel).toLowerCase()}!`);
    } else if (typeOfFuel === "Diesel" && littersInTank >= 25) {
        console.log(`You have enough ${(typeOfFuel).toLowerCase()}.`);
    } else if (typeOfFuel === "Diesel" && littersInTank < 25) {
        console.log(`Fill your tank with ${(typeOfFuel).toLowerCase()}!`);
    } else if (typeOfFuel === "Gasoline" && littersInTank >= 25) {
        console.log(`You have enough ${(typeOfFuel).toLowerCase()}.`);
    } else if (typeOfFuel === "Gasoline" && littersInTank < 25) {
        console.log(`Fill your tank with ${(typeOfFuel).toLowerCase()}!`);
    } else {
        console.log(`Invalid fuel!`); 
    }
}
fuelTank(["Gas", "25"]);