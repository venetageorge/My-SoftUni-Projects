function godzillaVsKingKong(input) {
  const budget = Number(input[0]);
  const stuntman = Number(input[1]);
  const priceForClothesPerPerson = Number(input[2]);

  const decorPrice = budget * 0.1;
  let priceForClothes = stuntman * priceForClothesPerPerson;

  if (stuntman > 150) {
    priceForClothes = priceForClothes - 0.1 * priceForClothes;
  }

  const priceDecorAndClothes = decorPrice + priceForClothes;

  const difference = Math.abs(budget - priceDecorAndClothes);
  if (priceDecorAndClothes <= budget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`
    );
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
  }
}
godzillaVsKingKong(["9587.88", "222", "55.68"]);
