function sorting(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let result = [];
 
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === sortedArr.length - 1) {
            result.push(sortedArr[i])
        } else {
            result.push(sortedArr[i]);
            let lastElement = sortedArr.pop();
            result.push(lastElement)
        }
    }
 
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);