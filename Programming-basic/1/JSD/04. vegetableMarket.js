function vegetableMarket(input) {
    let priceForKgVegetable = Number(input[0]); 
    let priceForKgFruit = Number(input[1]); 
    let totalKgVegetabels = Number(input[2]); 
    let totalKgFruits = Number(input[3]); 

    const euro = 1.94; 

    let priceForVegetables = priceForKgVegetable * totalKgVegetabels; 
    let priceForFruits = priceForKgFruit * totalKgFruits;
    let total = priceForVegetables + priceForFruits; 
    let totalInEuro = total / euro; 
    console.log(totalInEuro.toFixed(2)); 
}
vegetableMarket(["1.5", "2.5", "10", "10"]); 