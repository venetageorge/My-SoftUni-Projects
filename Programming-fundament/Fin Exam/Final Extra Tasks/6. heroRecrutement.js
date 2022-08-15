function heroRecrutement(input) {
    let myObj = {};

    while (input[0] != 'End') {
        let basis = input.shift().split(' ');
        let command = basis[0];
        let name = basis[1];
        let spellName = basis[2];

        if (command == 'End') {
            break;
        }

        switch (command) {
            case 'Enroll':
            if (myObj.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`);
            } else {
            myObj[name] = {};
            }
            break;

            case 'Learn':
            if (!myObj.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (myObj[name].spellName == spellName) {
                console.log(`${name} has already learnt ${spellName}`);
            } else {
            myObj[name]['spellName'] = spellName;
            }
            break;

            case 'Unlearn':

            if (!myObj.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (myObj[name].spellName !== spellName) {
                console.log(`${name} doesn't know ${spellName}`);
            } else {
                delete myObj[name].spellName;
            }
            break;
        }
    }
    console.log(`Heroes:`);
    for (let key in myObj) {

        if (myObj[key]['spellName'] == undefined) {
            console.log(`== ${key}: `);
        } else {
        console.log(`== ${key}: ${myObj[key]['spellName']}`);
        }
    }
}
heroRecrutement([
    'Enroll Stefan',
    'Enroll Peter',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn John ItShouldNotWork',
    'Unlearn George Dispel',
    'Unlearn Stefan ItShouldWork',
    'End']);
heroRecrutement(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"]);
heroRecrutement(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);