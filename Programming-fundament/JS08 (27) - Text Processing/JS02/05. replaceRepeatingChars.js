function replaceRepeatingChars(str) {
    let res = str[0];

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let newLetter = str[i + 1];
        if (letter !== newLetter) {
			if (newLetter !== undefined) {
				res += newLetter;
			} else {
				break;
			}
		}
    }
    console.log(res);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');