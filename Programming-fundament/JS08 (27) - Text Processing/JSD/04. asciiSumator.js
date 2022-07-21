function asciiSumator(input) {
    let firstSymbol = input.shift();
    let secondSymbol = input.shift();
    let firstElementChar = firstSymbol.charCodeAt();
    let secondElementChar = secondSymbol.charCodeAt();
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let buffer = input[i].split('');

        for (let element of buffer) {
            let letter = element[i];
            let letterCharcode = letter.charCodeAt();

            if (letterCharcode > firstElementChar && letterCharcode < secondElementChar) {
                sum += Number(letterCharcode);
            } else if (letterCharcode < firstElementChar && letterCharcode > secondElementChar) {
                sum += Number(letterCharcode);
            }
        }
    }
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);