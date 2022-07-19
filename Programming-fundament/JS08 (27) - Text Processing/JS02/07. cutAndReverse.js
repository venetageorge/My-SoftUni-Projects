function cutAndReverse(str) {
    let myArr = [];
    let res = '';
    let half = str.length / 2;

    for (let i = half - 1; i >= 0; i--) {
        res += str[i];
    }
    res += `\n`
    for (let j = str.length - 1; j >= half; j--) {
        res += str[j];
    }
    myArr.push(res);
    console.log(myArr.join());
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');