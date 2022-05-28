function triangleArea(side1, side2, side3) {
    let side = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)));
    console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);