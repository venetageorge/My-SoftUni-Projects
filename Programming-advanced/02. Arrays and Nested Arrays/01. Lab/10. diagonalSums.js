function diagonalSums(input) {
    let mainIndex = 0; 
    let secondIndex = input[0].length - 1;

    let firstSum = 0; 
    let secondSum = 0; 

    for (let row = 0; row < input.length; row++) {
        firstSum += input[row][mainIndex];
        secondSum += input[row][secondIndex];
        mainIndex++;
        secondIndex--;
    }
    console.log(firstSum + ' ' + secondSum);
}
diagonalSums([[20, 40],
    [10, 60]]);
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);