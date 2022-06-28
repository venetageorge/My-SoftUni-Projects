function spaceTravel(input) {
    let arr = input.slice(0);
    let command = arr.shift().split("||");
    let length = command.length;
    let startFuel = Number(arr.shift());
    let ammunitionSum = Number(arr.shift());
    let isFinish = false; 
    let isSucess = false;

    for (let i = 0; i < length; i++) {
        let basisComand = command.shift().split(' ');
        let toDo = basisComand[0];
        let num = Number(basisComand[1]);

        switch (toDo) {
            case 'Travel':
                if (startFuel < num) {
                    isFinish = true;
                    break;
                } else {
                startFuel -= num;
                console.log(`The spaceship travelled ${num} light-years.`);
                }
                if (isFinish) {
                    break;
                    }
            break;
            case 'Enemy':
                let double = 2 * num;
            if (ammunitionSum >= num) {
                    ammunitionSum -= num;
                    console.log(`An enemy with ${num} armour is defeated.`);
            } else {
                    if (startFuel >= double) {
                    startFuel -= double;
                    console.log(`An enemy with ${num} armour is outmaneuvered.`);
                    } else {
                        isFinish = true;
                    break;
                    }
            }
                if (isFinish) {
                break;
                }
            break;
            case 'Repair':
                startFuel += num;
                let added = num * 2;
                ammunitionSum += added;
                console.log(`Ammunitions added: ${added}.`);
                console.log(`Fuel added: ${num}.`);
            break;
            case 'Titan':
                isSucess = true;
            break;
        }

        if (isFinish) {
        break;
        } else if (isSucess) {              
           break;
        }

    }
    if (isFinish) {
        console.log(`Mission failed.`);
    } else if (isSucess) {              
        console.log(`You have reached Titan, all passengers are safe.`);
    }
}
spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan', 
'50', 
'80' ]);
// spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
// '60', 
// '100' ]);