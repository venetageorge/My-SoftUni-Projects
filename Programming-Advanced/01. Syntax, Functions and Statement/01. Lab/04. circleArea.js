function circleArea(input) {
    if (typeof input === 'number') {
        let rad = input;
        let area = Math.PI * rad * rad;
        console.log(area.toFixed(2));
    } else {
        let other = typeof input;
        console.log(`We can not calculate the circle area, because we receive a ${other}.`);
    }
}
circleArea(5);
circleArea('name');