function valueOfAString(input) {
    let command = input.pop();
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let letter = input[i].split('');

        for (let element of letter) {
            
            if (command == 'LOWERCASE') {
                let buffer = element.toLowerCase();
                if (buffer == element) {
                    if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
                        sum += Number(element.charCodeAt());
                    } 
                }
            } else if (command == 'UPPERCASE') {
                let buffer = element.toUpperCase();
                if (buffer == element) {
                    if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
                        sum += Number(element.charCodeAt());
                    } 
                }
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);