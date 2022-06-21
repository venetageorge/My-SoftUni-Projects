function houseParty(arr) {
    let guestLists = [];

    for (let element of arr) {
        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (guestLists.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestLists.push(name);
            }
        } else {
            if (!guestLists.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestLists.indexOf(name);
                guestLists.splice(index,1);
            }
        }
    }
    console.log(guestLists.join('\n'));
}
// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);