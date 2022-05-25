function petShop(input) {
    let foodForDogs = (input[0]);
    let foodForCats = (input[1]);
    let priceForDogs = 2.5 * foodForDogs;
    let priceForCats = 4 * foodForCats;
    let price = priceForDogs + priceForCats;
    console.log(`${price} lv.`);
}
petShop(["13", "9"]);