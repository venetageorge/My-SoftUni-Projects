function extractIncreasingSubsequenceFromArray(arr) {
    let myArr = [];
    let biggestOne = arr[0];
    myArr = arr.reduce((acc, current) => {
        if (biggestOne <= current) {
            acc.push(current);
            biggestOne = current;
        }
        return acc
    },[]);
    return myArr
}  
console.log(extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(extractIncreasingSubsequenceFromArray([1, 
    2, 
    3,
    4]));
console.log(extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]));