function stringGame(input) {
    let str = input.shift();

    while (input[0] !== 'Done') {
        let basis = input.shift().split(' ');
        let command = basis[0];

        switch (command) {

            case 'Change':
            let char = basis[1];
            let newCahr = basis[2];
            str = str.split(char).join(newCahr);
            console.log(str);
            break;

            case 'Includes':
            let substring = basis[1];

            if (str.includes(substring)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
            break;

            case 'End':
            let substr = basis[1];
            let lastIndex = str.length; 
            let lastOne = str.substring(lastIndex, lastIndex);
            if (lastOne == substr) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
            break;

            case 'Uppercase':

            str = str.toUpperCase();
            console.log(str);

            break;
            case 'FindIndex':
                let givenChar = basis[1];

                let theIndex = str.indexOf(givenChar);
                console.log(theIndex);
            break;

            case 'Cut':
                let startIndex = Number(basis[1]);
                let count = Number(basis[2]); 
                let newOneStr = str.substring(startIndex, startIndex + count);
                console.log(newOneStr);
            break;
        }
    }

}
stringGame(['//This is my string!//', 
'Change 1 i', 
'Includes string', 
'End my',
'Uppercase',
'FindIndex I',
'Cut 5 5',
'Done']);
stringGame(['*S0ftUni is the b3St Plac3**', 
'Change 2 o', 
'Includes best', 
'End is',
'Uppercase',
'FindIndex P',
'Cut 3 7',
'Done']);