function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = y2 - y1;
    let y = x2 - x1;
    console.log(Math.sqrt(x * x + y * y));
}
// distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);