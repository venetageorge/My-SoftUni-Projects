function counterStrike(input) {
    let energy = Number(input.shift());
    let arr = input.slice();
    let length = arr.length; 
    let counter = 0;

    for (let i = 0; i < length; i++) {
        let distanceNeedToReachEnemy = arr[i];

        if (distanceNeedToReachEnemy === 'End of battle') {
            console.log(`Won battles: ${counter}. Energy left: ${energy}`);
            break;
        } else {
            let distance = Number(distanceNeedToReachEnemy);
            if (energy < distance) {
                console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
                break;
            } else {
                energy -= distance;
                counter++;
                if (counter % 3 === 0) {
                    energy += counter;
                }
            }  
        }
    }
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);
// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"]);