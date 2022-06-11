function  housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWalls = x * y;
    let window = 1.5 * 1.5;
    let twoWalls = 2 * sideWalls - 2 * window;
    let backSide = x * x; 
    let door = 1.2 * 2; 
    let totalFrontAndBack = 2 * backSide - door;
    let totalUnder= totalFrontAndBack + twoWalls;
    let greenPaint = totalUnder / 3.4; 
    console.log(greenPaint.toFixed(2));

    let roofSide = 2 * (x * y); 
    let triangleRoof = 2 * (x * h / 2);
    let totalRoof = roofSide + triangleRoof;
    let redPaint = totalRoof / 4.3;
    console.log(redPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]); 