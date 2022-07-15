function revealWords(words, text) {
    let word = words.split(', ');
    let str = text.split(' ');

    for (let element of word) {
        let wordLength = element.length;
        let searchedOne = '*'.repeat(wordLength);
        
        if (str.includes(searchedOne)) {
            str.splice(str.indexOf(searchedOne), 1, element);
        }
    }
    console.log(str.join(' '));
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');