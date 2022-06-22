function searchForANumber(arr1, arr2) {
    let countOfElements = Number(arr2.shift());
    let countToBeDeleted = Number(arr2.shift());
    let seurchedNum = Number(arr2.shift());
    let sum = 0;
    
    let newArr = arr1.splice(0, countOfElements);
    newArr = newArr.splice(countToBeDeleted);
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] === seurchedNum) {
            sum++;
        }
    }
    console.log(`Number ${seurchedNum} occurs ${sum} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);