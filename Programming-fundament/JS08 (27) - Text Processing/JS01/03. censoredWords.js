function censoredWords(text, word) {
    let newText = text.split(word);
    let result = newText.join('*'.repeat(word.length));
    console.log(result);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');