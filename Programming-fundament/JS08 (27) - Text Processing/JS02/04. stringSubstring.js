function stringSubstring(word, text) {
    let str = text.split(' ');
    let isFound = false;

    for (let i = 0; i < str.length; i++) {
        let element = str[i].toLocaleLowerCase();

        if (element == word) {
            console.log(word);
            isFound = true;
            break;
        }

    }
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');