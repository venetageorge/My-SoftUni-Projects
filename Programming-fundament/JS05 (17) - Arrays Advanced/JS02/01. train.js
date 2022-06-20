function train(arr) {
    let wagon = arr.shift(' ').split(' ').map(Number);
    let maxCapacity = +arr.shift(' ');
    let length = arr.length; 

    for (let i = 0; i < length; i++) {

        let commandNum = arr[i].split(' ');
        if (commandNum[0] === 'Add') {
            wagon.push(Number(commandNum[1]));
        } else {
            for (let j = 0; j < wagon.length; j++) {
                if (Number(commandNum[0]) + wagon[j] <= maxCapacity) {
                    wagon[j] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(wagon.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);