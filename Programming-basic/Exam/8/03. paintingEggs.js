function paintingEggs(input) {
  let size = input[0];
  let colour = input[1];
  let countLots = Number(input[2]);
  let price = 0;
  let productionCost = 0;

  switch (size) {
    case "Large":
      if (colour === "Red") {
        price = 16 * countLots;
      } else if (colour === "Green") {
        price = 12 * countLots;
      } else {
        price = 9 * countLots;
      }
      break;
    case "Medium":
      if (colour === "Red") {
        price = 13 * countLots;
      } else if (colour === "Green") {
        price = 9 * countLots;
      } else {
        price = 7 * countLots;
      }
      break;
    case "Small":
      if (colour === "Red") {
        price = 9 * countLots;
      } else if (colour === "Green") {
        price = 8 * countLots;
      } else {
        price = 5 * countLots;
      }
      break;
  }
  productionCost = 0.35 * price;
  let totalSum = price - productionCost;
  console.log(`${totalSum.toFixed(2)} leva.`);
}
paintingEggs(["Small", "Yellow", "3"]);
