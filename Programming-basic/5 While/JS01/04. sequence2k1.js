function sequence2k1(input) {
    let n = Number(input[0]);
    let p = 1; 
    while (n >= p) {
        console.log(p);
        p = p * 2 + 1;
    }
}
sequence2k1(["31"]);