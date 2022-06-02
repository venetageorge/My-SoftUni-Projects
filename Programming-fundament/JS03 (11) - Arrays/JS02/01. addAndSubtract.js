function addAndSubtract(arr) {
    let sum = 0;
    let secondSum = 0;
    let newArr = arr;


    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];

        if(newArr[i] % 2 === 0) {
            newArr[i] += i;
        } else {
            newArr[i] -= i
        }
        secondSum += newArr[i];
    }
    console.log(newArr);
    console.log(sum);
    console.log(secondSum);

}
addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);