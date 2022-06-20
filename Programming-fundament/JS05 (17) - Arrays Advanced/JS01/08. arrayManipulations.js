function arrayManipulations(input) {
    let newArr = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let commandNum = input[i].split(' ');
        let commonNum = Number(commandNum[1]);

        if (commandNum[0] === 'Add') {
            newArr.push(commonNum);
        } else if (commandNum[0] === 'Remove') {
            if (newArr.includes(commonNum)) {
                let index = newArr.indexOf(commonNum);
                newArr.splice(index,1);
            }
        } else if (commandNum[0] === 'RemoveAt') {
            newArr.splice(commonNum, 1);
        } else if (commandNum[0] === 'Insert') {
            newArr.splice(commandNum[2], 0, commandNum[1]);
        }
    }
    console.log(newArr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);