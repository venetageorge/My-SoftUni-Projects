function bonusScore(input) {
    const bonus = Number(input[0]);
    let bonusPoints = 0;

    if (bonus <= 100) {
        bonusPoints = 5; 
    } else if (bonus > 1000) {
        bonusPoints = 0.1 * bonus;
    } else {
        bonusPoints = 0.2 * bonus;
    }

    if (bonus % 2 === 0) {
        bonusPoints += 1;
    } else if (bonus % 10 === 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(bonus + bonusPoints);
}
bonusScore(["15875"]);