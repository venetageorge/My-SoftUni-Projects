function lowerOrUpper(char) {
    let newChar = char.toUpperCase();
    if (char === newChar) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
lowerOrUpper('L');
lowerOrUpper('f');