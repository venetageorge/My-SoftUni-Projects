function dishwasher(input) {
    let bottlesDetergent = Number(input[0]);
    let detergentQuantity = bottlesDetergent * 750;
    let counter = 0;
    let totalDishes = 0;
    let totalPots = 0;
    let index = 1;
    let countOfDishes = input[index];
    
    while (countOfDishes !== "End") {
        let currentDishes = Number(countOfDishes);
        counter++;
        
        if (counter % 3 === 0) {
            totalPots += currentDishes;
            let detergetntNeeded = currentDishes * 15; 
            detergentQuantity -= detergetntNeeded;
        } else {
        totalDishes += currentDishes;
        let detergentDishes = currentDishes * 5;
        detergentQuantity -= detergentDishes;
        }
        if (detergentQuantity < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`)
            break;
        }    
        index++
        countOfDishes = input[index];
    }

    if (countOfDishes === "End" || detergentQuantity >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${detergentQuantity} ml.`);
    }
}
dishwasher(["2", "53", "65", "55", "End"]);