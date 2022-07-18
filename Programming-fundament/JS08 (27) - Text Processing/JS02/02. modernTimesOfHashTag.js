function modernTimesOfHashTag(text) {
    let str = text.split(' ');

    for (let word of str) {
        if (word.startsWith('#')) {
            if (word.length > 1) {
                let flag = true; 
                let wordLower = word.toLowerCase();
                for (let index = 1; index < wordLower.length; index++) {
                    if (wordLower.charCodeAt(index) < 97 || wordLower.charCodeAt(index) > 122) {
                        flag = false;
                        break;
                    } 
                }
                if (flag === true) {
                    console.log(word.slice(1));
                }
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');