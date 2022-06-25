function numbers(arr) {
    let arrOfNum = arr.split(" ").map(Number);
    let sum = 0;
    
    for (let element of arrOfNum) {
        sum += element;
    }
    let avg = sum / arrOfNum.length;
    arrOfNum = arrOfNum
    .filter(el => el > avg)
    .sort((a, b) => b - a)
    .slice(0, 5);

    if (arrOfNum.length > 0) {
        console.log(arrOfNum.join(' '));
    } else {
        console.log("No");
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');