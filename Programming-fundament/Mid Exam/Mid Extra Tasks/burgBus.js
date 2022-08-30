function burgerBus(arr) {
    let visitedCities = arr.shift();
    visitedCities = Number(visitedCities);
    let index = 0;
    let counter = 1;
    let totalProfit = 0;
 
    for (let i = 0; i < visitedCities; i++) {
        let nameOfCity = arr[index++];
        let income = Number(arr[index++]);
        let expenses = Number(arr[index++]);
 
        if (counter % 3 === 0) {
            expenses += expenses * 0.5;
        } else if (counter % 5 === 0) {
            income -= income * 0.1;
        } else if (counter % 3 === 0 && counter % 5 === 0) {
            income -= income * 0.1;
            expenses -= expenses * 0.5
        }
 
 
        counter++;
        let incomeFromCurrCity = (income - expenses).toFixed(2);
        incomeFromCurrCity = Number(incomeFromCurrCity);
        totalProfit = (totalProfit + incomeFromCurrCity).toFixed(2);
        totalProfit = Number(totalProfit);
        console.log(`In ${nameOfCity} Burger Bus earned ${incomeFromCurrCity.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
 
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"]);
burgerBus(["3", 
"Sofia", 
"895.67", 
"213.50", 
"Plovdiv", 
"2563.20", 
"890.26", 
"Burgas", 
"2360.55", 
"600.00"]);
