function toyShop(input) {
  const vacationPrice = Number(input[0]);
  const puzzleCount = Number(input[1]);
  const talkingDollsCount = Number(input[2]);
  const teddyBearCount = Number(input[3]);
  const minionsCount = Number(input[4]);
  const truckCount = Number(input[5]);

  const puzzlePrice = 2.6;
  const talkingDollPrice = 3;
  const teddyBearPrice = 4.1;
  const minionsPrice = 8.2;
  const truckPrice = 2;

  let countOfToys =
    puzzleCount +
    talkingDollsCount +
    teddyBearCount +
    minionsCount +
    truckCount;

  let totalCost =
    puzzleCount * puzzlePrice +
    talkingDollsCount * talkingDollPrice +
    teddyBearCount * teddyBearPrice +
    minionsCount * minionsPrice +
    truckCount * truckPrice;

  if (countOfToys >= 50) {
    totalCost = totalCost - 0.25 * totalCost;
  }

  totalCost = totalCost - 0.1 * totalCost;
  const difference = Math.abs(totalCost - vacationPrice);

  if (totalCost > vacationPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
