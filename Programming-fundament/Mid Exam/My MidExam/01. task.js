function experienceGaining(input) {
    let arr = input.slice(0);
    let amountOfExperianceNeeded = Number(arr.shift());
    let sumOfBattles = Number(arr.shift());
    let index = 0;
    let plusExperiance = Number(arr[index]);
    index++;
    let total = 0;
    let isFinish = false; 
    let battleCount = 0;

    for (let i = 1; i <= sumOfBattles; i++) {
        total += plusExperiance;
        battleCount++;

        if (i % 3 === 0) {
            total += (0.15 * plusExperiance);
        }

        if (i % 5 === 0) {
            total -= (0.1 * plusExperiance);
        }

        if (i % 15 === 0) {
            total += (0.05 * plusExperiance);
        }

        plusExperiance = Number(arr[index]);
        index++; 

        if (total >= amountOfExperianceNeeded) {
            isFinish = true;
            break;
        }
    }

    if (isFinish) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    } else {
        let diff = amountOfExperianceNeeded - total;
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`);
    }
}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30]);
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20]);
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20]);    