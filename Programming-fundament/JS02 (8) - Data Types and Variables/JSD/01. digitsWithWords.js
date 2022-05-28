function digitsWithWords(str) {
    let char = 0;
    switch (str) {
        case "zero": char = 0; break;
        case "one": char = 1; break;
        case "two": char = 2; break;
        case "three": char = 3; break;
        case "four": char = 4; break;
        case "five": char = 5; break;
        case "six": char = 6; break;
        case "seven": char = 7; break;
        case "eight": char = 8; break;
        case "nine": char = 9; break;
        case "ten": char = 10; break;
    }
    console.log(char);
}
digitsWithWords('nine');
digitsWithWords('two');
digitsWithWords('zero');