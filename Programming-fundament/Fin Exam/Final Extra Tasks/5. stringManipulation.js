function stringManipulation(input) {
    let str = input.shift();

    while (input[0] !== 'End') {
        let basis = input.shift().split(' ');
        let command = basis[0];

        switch (command) {
            case 'Translate':
                let firstChar = basis[1];
                let replacement = basis[2];
                if (str.includes(firstChar)) {
                    str = str.split(firstChar).join(replacement);
                }
                console.log(str);
            break;
            case 'Includes':
                let substr = basis[1];
                if (str.includes(substr)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
            break;
            case 'Start':
                let substrng = basis[1];
                if (str.startsWith(substrng)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
            break;
            case 'Lowercase':
                str = str.toLowerCase();
                console.log(str);
            break;
            case 'FindIndex':
                let newChar = basis[1];
                if (str.includes(newChar)) {
                    let lstIndex = str.lastIndexOf(newChar);
                    console.log(lstIndex);
                }
            break;
            case 'Remove':
                let startIndex = Number(basis[1]);
                let length = Number(basis[2]);
                let left = str.substring(0, startIndex);
                let right = str.substring(startIndex);
                let toBeEdited = right.substring(0, length);
                right = right.replace(toBeEdited, "");
                str = left + right;
                console.log(str);
            break;
        }
    }
}
stringManipulation([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End']);