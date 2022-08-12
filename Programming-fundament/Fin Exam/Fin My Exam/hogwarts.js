function hogwarts(input) {
    let str = input.shift();

    while (input[0] != 'Abracadabra') {
        let basis = input.shift().split(' ');
        let command = basis[0];

        if (command == 'Abracadabra') {
            break;
        }

        if (command == 'Abjuration') {
            str = str.toUpperCase();
                console.log(str);
        } else if (command == 'Necromancy') {
            str = str.toLowerCase();
                console.log(str);
        } else if (command == 'Illusion') {
                let index = Number(basis[1]);
                let letter = basis[2];

                if (str.length >= index & index >= 0) {
                str = str.substring(0, index) + letter + str.substring(index + 1);

                // let length = letter.length; 
                // let concat = str.substring(index, index + length);
                // str = str.replace(concat, letter);
                console.log(`Done!`);
                } else {
                    console.log(`The spell was too weak.`);
                }
        } else if (command == 'Divination') {
                let firstSubst = basis[1];
                let secondSubstr = basis[2];

                if (str.includes(firstSubst)) {
                    str = str.split(firstSubst).join(secondSubstr);
                    console.log(str);
                }
        } else if (command == 'Alteration') {
                let toBeRemoved = basis[1];
                if (str.includes(toBeRemoved)) {
                    str = str.replace(toBeRemoved, '');
                    console.log(str);
                  }
                // if (str.includes(toBeRemoved)) {
                //     let indexRemove = str.indexOf(toBeRemoved);
                //     let left = str.substring(0, indexRemove);
                //     let right = str.substring(indexRemove);
                //     let toBeCuted = right.substring(0, indexRemove + 1);
                //     right = right.replace(toBeCuted, "");
                //     str = left + right;
                    // console.log(str);
                // }
        } else {
            console.log(`The spell did not work!`);
        }
    }
}
hogwarts(["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"]);
// hogwarts(["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"]);
// hogwarts(["SwordMaster",
// "Target Target Target",
// "Abjuration",
// "Necromancy",
// "Alteration master",
// "Abracadabra"]);