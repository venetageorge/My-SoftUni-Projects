function flowerShop(input) {
    const magnolianCount = Number(input[0]);
    const zumbulCount = Number(input[1]);
    const roseCount = Number(input[2]); 
    const cactusCount = Number(input[3]); 
    const giftPrice = Number(input[4]); 

    const magnolianPrice = 3.25;
    const zumbulPrice = 4;
    const rosePrice = 3.5;
    const cactusPrice = 8; 

    let total = magnolianCount * magnolianPrice + zumbulCount * zumbulPrice + 
                roseCount * rosePrice + cactusCount * cactusPrice; 
    
    let taxTotal = total - (0.05 * total);

    if (taxTotal <= giftPrice) {
        let rest = giftPrice - taxTotal;
        console.log(`She will have to borrow ${Math.ceil(rest)} leva.`);
    } else {
        let rest = taxTotal - giftPrice;
        console.log(`She is left with ${Math.floor(rest)} leva.`);
    }
}
flowerShop(["15", "7", "5", "10", "100"]);