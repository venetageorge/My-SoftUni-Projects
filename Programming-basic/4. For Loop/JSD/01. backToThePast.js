function backToThePast(input) {
    let inheritanceMoney = Number(input[0]);
    let yearLive = Number(input[1]);
    let yearNow = 18; 
    let spendMoney = 0;
    let moneyLeft = 0;

    for (let currentYear = 1800; currentYear <= yearLive; currentYear++) {
        if (currentYear % 2 === 0) {
            spendMoney += 12000; 
            yearNow++;
        } else {
            spendMoney += 12000 + (50 * yearNow);
            yearNow++;
        }
    }  
    let diff = Math.abs(inheritanceMoney - spendMoney);
    if (inheritanceMoney >= spendMoney) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"]);    