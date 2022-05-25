function easterBakery(input) {
  const flourPriceKg = Number(input[0]);
  const countKgFlour = Number(input[1]);
  const countKgSugar = Number(input[2]);
  const countEggs = Number(input[3]);
  const countYeast = Number(input[4]);

  let sugarPrice = flourPriceKg - 0.25 * flourPriceKg;
  let eggsPrice = flourPriceKg + 0.1 * flourPriceKg;
  let yeastPrice = sugarPrice - 0.8 * sugarPrice;
  let flourTotal = flourPriceKg * countKgFlour;
  let sugarTotal = countKgSugar * sugarPrice;
  let eggsTotal = countEggs * eggsPrice;
  let yeastTotal = countYeast * yeastPrice;
  let total = flourTotal + sugarTotal + eggsTotal + yeastTotal;
  console.log(total.toFixed(2));
}
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);
