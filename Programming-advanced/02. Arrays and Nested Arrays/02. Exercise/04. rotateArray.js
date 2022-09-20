function rotateArray(arr, num) {
    for (let i = 1; i <= num; i++) {
        let removed = arr.pop();
        arr.unshift(removed)
    }
    console.log(arr.join(" "));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);