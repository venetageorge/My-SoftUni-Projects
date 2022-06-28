function blackFlag(arr) {
    let days = Number(arr[0]);
    let plunderForDay = Number(arr[1]);
    let target = Number(arr[2]);
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += plunderForDay;
        if (i % 3 === 0) {
            let bonus = plunderForDay * 0.5;
            total += bonus;
        } 
        
        if (i % 5 === 0) {
            let minus = total * 0.3;
            total -= minus;
        } 
    }
    if (total >= target) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let totalPercentage = (total / target) * 100;
        console.log(`Collected only ${totalPercentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5",
"40",
"100"]);
blackFlag(["10",
"20",
"380"]);