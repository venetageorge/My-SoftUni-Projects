function shopping(input) {
  const budget = Number(input[0]);
  const videoCardCount = Number(input[1]);
  const proccessorsCount = Number(input[2]);
  const ramCount = Number(input[3]);

  const videoCardPrice = 250;
  let videoCardsSum = videoCardPrice * videoCardCount;

  let proccessorSum = videoCardsSum * 0.35 * proccessorsCount;
  let ramPrice = 0.1 * videoCardsSum;
  let ramSum = ramCount * ramPrice;

  let totalSum = videoCardsSum + proccessorSum + ramSum;

  if (videoCardCount > proccessorsCount) {
    totalSum = totalSum - 0.15 * totalSum;
  }

  difference = Math.abs(budget - totalSum);

  if (totalSum <= budget) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
  }
}
shopping(["920.45", "3", "1", "1"]);
