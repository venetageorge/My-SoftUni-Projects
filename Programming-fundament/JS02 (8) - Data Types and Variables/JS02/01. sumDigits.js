function sumDigits(num) {
    let res = num.toString();
    let sum = 0;

    for (let i = 0; i <= res.length - 1; i++) {
        sum += Number(res[i]);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);