function harvest(input) {
    const areaSqMeter = Number(input[0]);
    const grapeInOneSqMeter = Number(input[1]);
    const neededLitersWine = Number(input[2]);
    const countOfWorkers = Number(input[3]);

    let totalGrape = areaSqMeter * grapeInOneSqMeter;
    let areaWithGrape = (0.4 * totalGrape) / 2.5;
    
    if (areaWithGrape >= neededLitersWine) {
        let rest = areaWithGrape - neededLitersWine; 
        let proPerson = (rest / countOfWorkers);
        console.log(`Good harvest this year! Total wine: ${Math.ceil(areaWithGrape)} liters.`);
        console.log(`${Math.ceil(rest)} liters left -> ${proPerson} liters per person.`);
    } else {
        let rest = neededLitersWine - areaWithGrape;
        console.log(`It will be a tough winter! More ${Math.floor(rest)} liters wine needed.`)
    }
}
harvest(["1020", "1.5", "425", "4"]);