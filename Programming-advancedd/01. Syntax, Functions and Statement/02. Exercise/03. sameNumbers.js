function sameNumbers(num) {
    let strNum = num.toString();
    let firstChar = strNum[0];
    let isEqual = true;
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);

        if (firstChar !== strNum[i]) {
            isEqual = false; 
        }
    }
    if (!isEqual) {
        console.log('false');
        console.log(sum);
    } else {
        console.log('true');
        console.log(sum);
    }
}
sameNumbers(2222222); 
sameNumbers(1234); 