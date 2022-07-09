function wordOccurrences(input) {
    let myMap = new Map();

    for (let element of input) {
        let basis = element.split(' ');
        let word = basis[0];
        let sum = 1;
        if (!myMap.has(word)) {
            myMap.set(word, sum);
        } else {
            let old = myMap.get(word, sum)
            myMap.set(word, old + 1);
        }
    }
    let sorted = Array.from(myMap);
    let newOne = sorted.sort((a, b) => b[1] - a[1]);

    for (let el of newOne) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);