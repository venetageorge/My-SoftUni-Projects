function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let totalMoney = 0;

    if (budget <= 100) {
        if (season === "summer") {
            totalMoney = 0.3 * budget;
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${totalMoney.toFixed(2)}`);
        } else if (season === "winter") {
            totalMoney = 0.7 * budget; 
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${totalMoney.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 1000) {
        if (season === "summer") {
            totalMoney = 0.4 * budget;
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${totalMoney.toFixed(2)}`);
        } else if (season === "winter") {
            totalMoney = 0.8 * budget; 
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${totalMoney.toFixed(2)}`);
        }
    } else {
            totalMoney = 0.9 * budget;
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${totalMoney.toFixed(2)}`);
    }
}
journey(["1500", "summer"])