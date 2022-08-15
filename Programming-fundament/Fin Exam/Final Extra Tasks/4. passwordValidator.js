function passwordValidator(input) {
    let pass = input.shift();

    while (input[0] !== 'Complete') {
        let basis = input.shift().split(' ');
        let command = basis[0];
        let second = basis[1];

//UPPER CASE AN BESTIMMTE POSITION 


        if (command == 'Make' && second == 'Upper') {
            second = Number(basis[2]);
            let substr = pass.substring(second, second + 1);
            pass = pass.replace(substr, substr.toUpperCase());
            console.log(pass);
// LOWER CASE AN BESTIMMTE POSITION 


        } else if (command == 'Make' && second == 'Lower') {
            second = Number(basis[2]);
            let substri = pass.substring(second, second + 1);
            pass = pass.replace(substri, substri.toLowerCase());
            console.log(pass);
        } else if (command == 'Insert') {
            let firstIndex = Number(second);
            let toBeAdded = basis[2];
            if (firstIndex >= 0 && firstIndex <= pass.length - 1) {
                let firstPart = pass.slice(0, firstIndex);
                let secondPart = pass.slice(firstIndex);
                pass = firstPart + toBeAdded + secondPart;
                console.log(pass);
            }
        } else if (command == 'Replace') {
            let char = second;
            let value = Number(basis[2]);
            let asciiiValue = Number(char.charCodeAt());
            if (pass.includes(char)) {
            let sum = value + asciiiValue; 
            let newSymbol = String.fromCharCode(sum);
            pass = pass.split(char).join(newSymbol)
                console.log(pass);
            } 
        } else if (command == 'Validation') {
            let nonChar = /\W/g;
            let upperCase = /[A-Z]/g;
            let lowerCase = /[a-z]/g;
            let digit = /\d/g;
            let matchNonchar = pass.match(nonChar);
            let matchUpperCase = pass.match(upperCase);
            let matchLowerCase = pass.match(lowerCase);
            let matchDigit = pass.match(digit);

            if (pass.length < 8) {
                console.log(`Password must be at least 8 characters long!`);
            } 
            if (matchNonchar) {
                console.log(`Password must consist only of letters, digits and _!`);
            }
            if (!matchUpperCase) {
                console.log(`Password must consist at least one uppercase letter!`);
            }
            if (!matchLowerCase) {
                console.log(`Password must consist at least one lowercase letter!`);
            }
            if (!matchDigit) {
                console.log(`Password must consist at least one digit!`);
            }
        }
    }
}
passwordValidator(['invalidpassword*', 'Add 2 p', 'Replace i -50', 'Replace * 10', 'Make Upper 2', 'Validation', 'Complete']);
passwordValidator(['123456789', 'Insert 3 R', 'Replace 5 15', 'Validation', 'Make Lower 3', 'Complete']);