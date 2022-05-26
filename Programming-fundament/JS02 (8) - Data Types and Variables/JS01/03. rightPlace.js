function rightPlace(str, char, str2) {
    let result = str.replace('_', char);
    let outputt = result === res ? "Matched" : "Not Matched";
    console.log(outputt);

    // Second solution:
    // let res = "";
    // for (let i = 0; i < str.length; i++) {
    //     let currentChar = str[i];
    //     if (currentChar === "_") {
    //         res += char;
    //     } else {
    //         res += currentChar;
    //     }
    // }
    // if (res == str2) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');