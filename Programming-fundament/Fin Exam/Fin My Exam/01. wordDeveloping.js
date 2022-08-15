function wordDeveloping(input) {
    let str = '';
    let indexArr = [];

    while (input[0] != 'End') {
        let basis = input.shift().split(' ');
        let command = basis.shift();

        if (command == 'End') {
            break;
        }

        switch (command) {

            case 'Add':
                let substr = basis[0];
                str = str.concat(substr);
            break;
            case 'Upgrade':
                let char = basis[0];
                let asciiiValueOftheChar = Number(char.charCodeAt());
                let asciiiValueNew = asciiiValueOftheChar + 1;
                let newChar = String.fromCharCode(asciiiValueNew);
                if (str.includes(char)) {
                    str = str.split(char).join(newChar);
                }
            break;
            case 'Print':
                console.log(str);
            break;
            case 'Index':
                let charachter = basis[0];
                if (str.includes(charachter)) {
                    for (let i = 0; i < str.length; i++) {
                        let commonChar = str[i];

                        if (commonChar == charachter) {
                            let indeeex = i;
                            indexArr.push(indeeex);
                        }
                    }
                    console.log(indexArr.join(' '));
                } else {
                    console.log(`None`);
                }
            break;
            case 'Remove':
                let substri = basis[0];

                if (str.includes(substri)) {
                    str = str.split(substri).join('');
                }
            break;
        }
    }
}
wordDeveloping(["Add University",
"Print",
"Upgrade n",
"Print",
"Index i",
"Remove sity",
"Print",
"End"]);
wordDeveloping(["Add HelloWorld",
"Upgrade e",
"Print",
"Index b",
"Remove rl",
"Print",
"End"]);