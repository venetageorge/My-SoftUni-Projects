function sumFirstAndLast(arr) {
    let firstElement = arr.shift('');
    let lasteElement = arr.pop();

    let sum = Number(firstElement) + Number(lasteElement);
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);