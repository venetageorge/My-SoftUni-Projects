function activationKeys(input) {
    let key = input.shift();
    let newCuted = '';

    for (let i = 0; i < input.length; i++) {
        let basis = input[i].split('>>>');
        let command = basis[0];

        if (command == 'Contains') {
            let substr = basis[1];
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command == 'Flip') {
            let letters = basis[1];
            let startIndex = Number(basis[2]);
            let endIndex = Number(basis[3]);
            let cuted = key.substring(startIndex, endIndex);

            if (letters == 'Upper') {
                for (let el of cuted) {
                    el = el.toUpperCase();
                    newCuted += el;
                }
                key = key.replace(cuted, newCuted)
                newCuted = "";
            } else {
                for (let elem of cuted) {
                    elem = elem.toLowerCase();
                    newCuted += elem;
                }
                key = key.replace(cuted, newCuted)
                newCuted = "";
            }
            console.log(key);
        } else if (command == 'Slice') {
            let start = Number(basis[1]);
            let end = Number(basis[2]);
            let lefSide = key.substring(0, start);
            let rightSide = key.substring(end);
            key = lefSide + rightSide; 
            console.log(key);
        } else if (command == 'Generate') {
            break;
        }
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);