function triplesOfLatinLetters(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let first = String.fromCharCode(97+i);
                let second = String.fromCharCode(97+j);
                let third = String.fromCharCode(97+k);
                console.log(first + second + third);
                
            }
        }
    }
}
triplesOfLatinLetters('3');
triplesOfLatinLetters('2');