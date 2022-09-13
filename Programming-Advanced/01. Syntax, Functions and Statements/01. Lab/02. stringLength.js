function stringLength (...params) {
    let sum = params.reduce((a, b) => a + b.length, 0);
    let avg = Math.floor(sum / params.length); 

    return [sum, avg]
}
console.log(stringLength('chocolate', 'ice cream', 'cake').join("\n"));
console.log(stringLength('pasta', '5', '22.3').join("\n"));