function manOWar(arr) {
    let pirateShip = arr.shift().split(">").map(Number);
    let warShip = arr.shift().split(">").map(Number);
    let maxHealthCapacity = Number(arr.shift());

    let index = 0;
    let command = arr[index];
    index++;

    let pirateSum = 0;
    let warSum = 0;
    let isGameOver = false; 
    let isOver = false;

    while (command !== 'Retire') {
        let basis = command.split(" ");
        let i;

        switch (basis[0]) {
            case "Fire": 
            i = Number(basis[1]);
            let demage = Number(basis[2]);
            if (i < 0 || i > warShip.length - 1) {
                command = arr[index];
                index++;
                continue;
            } 
            warShip[i] -= demage;
            if (warShip[i] <= 0) {
                isGameOver = true;
                break;
            }
            break;
            case "Defend": 
            i = Number(basis[1]);
            let endIndexPirateShip = Number(basis[2]);
            let dmg = Number(basis[3]);
            if (i < 0 || i > pirateShip.length - 1 || endIndexPirateShip < 0 || endIndexPirateShip > pirateShip.length - 1) {
                command = arr[index];
                index++;
                continue;
            } 
            
            for (let x = i; x <= endIndexPirateShip; x++) {
                pirateShip[x] = pirateShip[x] - dmg;
                if (pirateShip[x] <= 0) {
                    isOver = true;
                    break;
                }
            }
            break;
            case "Repair": 
                i = Number(basis[1]);
                let health = Number(basis[2]);

                if (i < 0 || i > pirateShip.length - 1) {
                    command = arr[index];
                    index++;
                    continue;
                } 
                if (pirateShip[i] + health <= maxHealthCapacity) {
                pirateShip[i] = pirateShip[i] + health;
                } else {
                    pirateShip[i] = maxHealthCapacity;
                }
            break;
            case "Status": 
                let percent = 0.2 * maxHealthCapacity;
                let result = pirateShip.filter(el => el < percent) 
                console.log(result.length + " sections need repair.");
            break;
        }

        if (isGameOver) {
            break;
        } 
        
        if (isOver) {
            break; 
        } 

        command = arr[index];
        index++;
    }

    if (isGameOver) {
        console.log("You won! The enemy ship has sunken."); 
    } else if (isOver) {
        console.log("You lost! The pirate ship has sunken."); 
    } else {
        for (let el of pirateShip) {
            pirateSum += Number(el);
        }
        for (let el of warShip) {
            warSum += Number(el);
        }
        console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warSum}`);
    }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);