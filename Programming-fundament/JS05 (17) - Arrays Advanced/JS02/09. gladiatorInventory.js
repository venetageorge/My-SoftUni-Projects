function gladiatorInventory(arr) {
    let petersInventory = [];
    petersInventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] == 'Buy') {
            let equipment = command[1];
            if (!petersInventory.includes(equipment)) {
                petersInventory.push(equipment);
            } 
        } else if (command[0] == 'Trash') {
            let equipment1 = command[1];
            if (petersInventory.includes(equipment1)) {
               let index = petersInventory.indexOf(equipment1);
                petersInventory.splice(index, 1);
            }
        } else if (command[0] == 'Repair') {
            let equipment2 = command[1];
            if (petersInventory.includes(equipment2)) {
                let index = petersInventory.indexOf(equipment2);
                petersInventory.splice(index, 1);
                petersInventory.push(equipment2);
            }
        } else if (command[0] == 'Upgrade') {
            let equipment3 = command[1].split('-');

            if (petersInventory.includes(equipment3[0])) {
                let index = petersInventory.indexOf(equipment3[0]);
                let upgrade = `${equipment3[0]}:${equipment3[1]}`;
                petersInventory.splice(index + 1, 0, upgrade);
            }
        }
    }
    console.log(petersInventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);