function touristShop(input) {
  let budget = Number(input[0]);
  let index = 1;
  let product = input[index];
  let price = 0;
  let total = 0;
  let counter = 0;

  while (product !== "Stop") {
    product = input[index];
    index++;
    if (product === "Stop") {
      break;
    }

    if (index % 3 === 0) {
      price = Number(input[index]);
      price -= 0.5 * price;
      budget -= price;
      total += price;
      if (budget < 0) {
        break;
      }
    } else {
      price = Number(input[index]);
      total += price;
      budget -= price;
      if (budget < 0) {
        break;
      }
    }
    counter++;
    index++;
  }
  if (product === "Stop") {
    console.log(`You bought ${counter} products for ${total.toFixed(2)} leva.`);
  } else {
    let diff = Math.abs(budget);
    console.log(`You don't have enough money!`);
    console.log(`You need ${diff.toFixed(2)} leva!`);
  }
}
touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
