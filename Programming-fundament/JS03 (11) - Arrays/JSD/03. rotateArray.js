function rotateArray(arr) {
    let lastOne = arr.pop();

    for (let i = 0; i < lastOne; i++) {
            let newFirst = arr.pop(arr[i]);
            arr.unshift(newFirst);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);