function serializeString(input) {
    let str = input[0];
    let myCollection = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!myCollection.hasOwnProperty(char)) {
            myCollection[char] = [];
        }
        myCollection[char].push(i);
    }

    for (let char in myCollection) {
        console.log(`${char}:${myCollection[char].join('/')}`);
    }
}
serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);