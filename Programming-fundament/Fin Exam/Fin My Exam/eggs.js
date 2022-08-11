function eggs(input) {
    let str = input.shift();
    let patternEgg = /(?<start>[@|#]+)(?<text>[a-z]{3,})([@|#]+)\W+(\/{1,})(?<digit>\d+)(\/{1,})/g;

    let match = patternEgg.exec(str);
    let res = [];

    while (match) {
        let first = match.groups.text;
        let second = match.groups.digit;
        
        res.push(`You found ${second} ${first} eggs!`)

        match = patternEgg.exec(str);
    }
    console.log(res.join('\n'));
}
eggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
// eggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);