function aMinerTask(input) {
    let myObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!myObj.hasOwnProperty(resource)) {
            myObj[resource] = new Set();
        }
        myObj[resource] = myObj[resource].add(quantity);
    }

    let changed = Object.entries(myObj);
 
    for (let [key, value] of changed) {
        let newValues = new Set(value);
        let sum = 0;
        for (let value of newValues) {
            sum += value;
        }
        console.log(`${key} -> ${sum}`);
}
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
// aMinerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
//     ]);