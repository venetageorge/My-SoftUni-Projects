function tseamAccount(arr) {
    let first = arr[0].split(' ');
    
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i].split(' ');
        let command = currentElement[0];
        let gameName = currentElement[1];
        
        if (command === "Play!") {
            break;
        } else if (command === "Install"){
            let counter = 0;
            for (let i = 0; i < first.length; i++) {
                if (first[i] === gameName) {
                    counter++;
                    break;
                }
            }
            if (counter === 0) {
                first.push(gameName);
            }
        } else if (command === "Uninstall") {
            for (let i = 0; i < first.length; i++) {
                if (first[i] === gameName) {
                    first.splice(i, 1);
                    break;
                }
            }
        } else if (command === 'Update') {
            for (let i = 0; i < first.length; i++) {
                if (first[i] === gameName) {
                    first.splice(i, 1);
                    first.push(gameName);
                }
            }
        } else if (command === "Expansion") {
            let expansion = gameName.split('-');
            let game = expansion[0];

            for (let i = 0; i < first.length; i++) {
                if (first[i] === game) {
                    let expandedGame = expansion.join(':');
                    first.splice(i + 1, 0, expandedGame);
                    break;
                }
            }
        }
    }

    console.log(first.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);