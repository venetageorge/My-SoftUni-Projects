function lastKNumbersSequance(n, k) {
    let newArr = [1];

    for (let i = 0; i < n - 1; i++) {
            let sequenceK = newArr.slice(-k);
            let sum = 0;
            for (let element of sequenceK) {
                sum += element;
            }
            newArr.push(sum);
    } 
    console.log(newArr.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);