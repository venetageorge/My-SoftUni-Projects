function repeatString(str, num) {
    let res = "";

    for (let i = 0; i < num; i++) {
        res += str;
    }
    console.log(res);
}
repeatString("abc", 3);
repeatString("String", 2);