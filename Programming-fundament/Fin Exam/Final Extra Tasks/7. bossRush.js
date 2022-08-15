function bossRush(input) {
    let numOfInputs = Number(input.shift());
    let pattern = /[|](?<bossName>[A-Z]{4,})[|][:][#](?<title>[A-z]+\s{1}[A-z]+)[#]/g;
    let match = pattern.exec(input);

    for (let i = 0; i < numOfInputs; i++) {

        if (!match) {
            console.log(`Access denied!`);
        } else {
            let name = match.groups['bossName'];
            let titttle = match.groups['title'];
            let lengthName = name.length;
            let lengthTitle = titttle.length;
            
            console.log(`${name}, The ${titttle}`);
            console.log(`>> Strength: ${lengthName}`);
            console.log(`>> Armor: ${lengthTitle}`);
            match = pattern.exec(input);
        }
    }
}
bossRush(["3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#"]);
bossRush(["3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#"]);