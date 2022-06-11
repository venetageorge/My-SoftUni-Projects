function triangleArea(input) {
    const a = Number(input[0]);
    const h = Number(input[1]); 
    let area = a * h / 2; 
    console.log(area.toFixed(2)); 
}
triangleArea(["1.23456", "4.56789"]); 