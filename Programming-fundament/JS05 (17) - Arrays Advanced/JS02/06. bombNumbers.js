function bombNumbers(arr, specNum) {
    let nummerBomb = specNum.shift();
    let powerBomb = specNum.shift();
    let sum = 0;

    while (arr.includes(nummerBomb)) {
        let index = arr.indexOf(nummerBomb);
        let removed = powerBomb * 2 + 1;
        let startIndex = index - powerBomb; 

        if (startIndex < 0) {
            removed += startIndex;
            startIndex = 0;
        }
        arr.splice(startIndex, removed);
    }

    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]); 
        sum += element;
        
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);