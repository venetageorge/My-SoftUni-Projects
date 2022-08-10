function pirates(input) {
    let myObj = {};

    while (input[0] !== 'Sail') {
        let tokens = input.shift().split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!myObj[city]) {
            myObj[city] = {population, gold};
        } else {
            myObj[city].population += population;
            myObj[city].gold += gold;
        }
    }
    for (let i = 0; i < input.length; i++) {
        let [command, ...rest] = input[i].split('=>');
        if (command === 'End') {
            break;
        }
        switch(command) {
            case 'Plunder':
                let town = rest[0];
                let peopleKilled = Number(rest[1]);
                let goldStolen = Number(rest[2]);
                myObj[town].population -= peopleKilled;
                myObj[town].gold -= goldStolen;
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                if (myObj[town].population === 0 || myObj[town].gold === 0) {
                    delete myObj[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

                case 'Prosper':
                    let townName = rest[0];
                    let prosperAmount = Number(rest[1]);
                    if (prosperAmount > 0) {
                        myObj[townName].gold += prosperAmount;
                        console.log(`${prosperAmount} gold added to the city treasury. ${townName} now has ${myObj[townName].gold} gold.`);
                    } else {
                        console.log('Gold added cannot be a negative number!');
                        break;
                    }
        }
    }
    let cityCount = Object.entries(myObj).length;
    if (cityCount === 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);
    }
    for (const city of Object.entries(myObj)) {
        console.log(`${city[0]} -> Population: ${myObj[city[0]].population} citizens, Gold: ${myObj[city[0]].gold} kg`);
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
// pirates(["Nassau||95000||1000",
// "San Juan||930000||1250",
// "Campeche||270000||690",
// "Port Royal||320000||1000",
// "Port Royal||100000||2000",
// "Sail",
// "Prosper=>Port Royal=>-200",
// "Plunder=>Nassau=>94000=>750",
// "Plunder=>Nassau=>1000=>150",
// "Plunder=>Campeche=>150000=>690",
// "End"]);