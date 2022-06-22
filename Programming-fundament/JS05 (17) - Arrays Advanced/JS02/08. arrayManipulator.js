function arrayManipulator(arr, commands) {
    let length = commands.length;
    let newArr = arr.slice(0);

    for (let i = 0; i < length; i++) {
        let command = commands[i].split(' ');
        let text = command.shift();
        command = command.map(Number);
        let sumPairs = 0;
        let sumPairsArr = [];

        switch(text) {
            case 'add':
                let index = command[0];
                let element = command[1];
                newArr.splice(index, 0, element);
            break;
            case 'addMany':
                let newIndex = command.shift();
                newArr.splice(newIndex, 0, ...command);
            break;
            case 'contains':
                console.log(newArr.indexOf(command[0]));
            break;
            case 'remove':
                let newOneIndex = command[0];
                newArr.splice(newOneIndex, 1);
            break;
            case 'shift':
                for (let i = 0; i < command[0]; i++) {
                    newArr.push(newArr.shift());
                }
            break;
            case 'sumPairs':
                if (newArr.length % 2 !== 0) {
                    newArr.push(0);
                } 
                for (let i = 0; i < newArr.length; i += 2) {
                    sumPairs = newArr[i] + newArr[i + 1];
                    sumPairsArr.push(sumPairs);
                }
                newArr = [ ...sumPairsArr];
            break;
            case 'print':
                console.log(`[ ${newArr.join(', ')} ]`);
            break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);