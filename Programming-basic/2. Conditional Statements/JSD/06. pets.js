function pets(input) {
    const daysCount = Number(input[0]);
    const totalFoodInKg = Number(input[1]); 
    const dogFoodKg = Number(input[2]);
    const catFoodKg = Number(input[3]);
    const turtleFoodGram = Number(input[4]);
    
    let dogFood = daysCount * dogFoodKg;
    let catFood = daysCount * catFoodKg;
    let turtleFood = (daysCount * turtleFoodGram) / 1000;
    let total = dogFood + catFood + turtleFood;

    if (total <= totalFoodInKg) {
        let rest = totalFoodInKg - total;
        console.log(`${Math.floor(rest)} kilos of food left.`); 
    } else {
        let rest = (total - totalFoodInKg);
        console.log(`${Math.ceil(rest)} more kilos of food are needed.`);
    }
}
pets(["5", "10", "2.1", "0.8", "321"])