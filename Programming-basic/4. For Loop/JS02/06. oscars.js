function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let pointsFromAccademy = Number(input[index]);
    index++;
    let countJury = Number(input[index]);
    index++;
    let nominated = false; 

    for (let i = 0; i < countJury; i++) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++

        pointsFromAccademy = pointsFromAccademy + (name.length * tempPoints / 2);

        if (pointsFromAccademy > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAccademy.toFixed(1)}!`);
            nominated = true; 
            break;
        }
    }
    if (!nominated) {
        let diff = Math.abs(pointsFromAccademy - 1250.5)
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
