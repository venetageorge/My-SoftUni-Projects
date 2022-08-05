function mirrorWords(input) {
    let pattern = /(?<start>[@#]{1})(?<firstWord>[A-z]{3,})(?<middle>\1{2})(?<secondWord>[A-z]{3,})(?<end>[@#]{1})/g;
    let mattch = pattern.exec(input);
    let res = [];
    let validPairs = 0;
    let mirroredWords = 0; 

    while (mattch) {
        let firstWord = mattch.groups.firstWord;
        let secondWord = mattch.groups.secondWord;
        let reversed = secondWord.split('').reverse().join('');
        if (firstWord === reversed) {
            res.push(firstWord.concat(' <=> ', secondWord));
            mirroredWords++;
        }
        validPairs++;
        mattch = pattern.exec(input);
    }
    if (validPairs === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${validPairs} word pairs found!`)
    }
    
    if (mirroredWords === 0) {
    console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
    }
    console.log(res.join(', '));
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);