function bikeRace(input) {
    const countBicyclerJunior = Number(input[0]);
    const countBicyclerSenior = Number(input[1]);
    const typeOfRoute = input[2]; 

    let trailTaxJunior = 5.50;
    let trailTaxSenior = 7;
    let crossCountryTaxJunior = 8;
    let crossCountryTaxSenior = 9.50;
    let downhillTaxJunior = 12.25;
    let downhillTaxSenior = 13.75; 
    let roadTaxJunior = 20;
    let roadTaxSenior = 21.50;
    let tax = 0;
    let finalTax = 0;
    let crossTax = 0;

    if (typeOfRoute === "trail") {
        let tax =  countBicyclerJunior * trailTaxJunior + countBicyclerSenior * trailTaxSenior;
        let finalTax = tax - (tax * 0.05);
        console.log(finalTax.toFixed(2));
    } else if (typeOfRoute === "cross-country") {
        let tax = countBicyclerJunior * crossCountryTaxJunior + countBicyclerSenior * crossCountryTaxSenior;
        if ((countBicyclerJunior + countBicyclerSenior) >= 50) {
            let finalTax = tax - (tax * 0.05);
            let crossTax = finalTax - (0.25 * finalTax);
            console.log(crossTax.toFixed(2));
        } else {
            let finalTax = tax - (tax * 0.05);
            console.log(finalTax.toFixed(2));
        }
    } else if (typeOfRoute === "downhill") {
        let tax = countBicyclerJunior * downhillTaxJunior + countBicyclerSenior * downhillTaxSenior;
        let finalTax = tax - (tax * 0.05);
        console.log(finalTax.toFixed(2));
    } else if (typeOfRoute === "road") {
        let tax = countBicyclerJunior * roadTaxJunior + countBicyclerSenior * roadTaxSenior;
        let finalTax = tax - (tax * 0.05);
        console.log(finalTax.toFixed(2));
    }
}
bikeRace(["10", "20", "trail"])