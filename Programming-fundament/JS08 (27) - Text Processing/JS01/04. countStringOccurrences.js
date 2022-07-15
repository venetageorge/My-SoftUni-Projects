function countStringOccurrences(text, word) {
    let count = 0;
    let basis = text.split(' ');

    for (let i = 0; i < basis.length; i++) {
        let theWord = basis[i];

        if (theWord == word) {
            count++;
        }
    }
    console.log(count);

    let textArr = text.split(' ');
    let counter = textArr.filter(x => x === word).length;
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is');
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni');