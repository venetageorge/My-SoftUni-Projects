function substring(input, startIndex, lastIndex) {
    let endIndex = lastIndex + startIndex;
    let eddited = input.substring(startIndex, endIndex);
    console.log(eddited);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);