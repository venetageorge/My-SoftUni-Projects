function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let countStuntman = Number(input[1]);
  let priceClothesOneStuntman = Number(input[2]);

  let decor = 0.1 * budget;
  if (countStuntman > 150) {
    priceClothesOneStuntman -= 0.1 * priceClothesOneStuntman;
  }
  let clothes = countStuntman * priceClothesOneStuntman;
  let total = clothes + decor;

  let diff = Math.abs(total - budget);
  if (total <= budget) {
    console.log(
      `Action!\nWingard starts filming with ${diff.toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money!\nWingard needs ${diff.toFixed(2)} leva more.`
    );
  }
}
godzillaVsKong(["9587.88", "222", "55.68"]);
