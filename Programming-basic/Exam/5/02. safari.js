function safari(input) {
  const budget = Number(input[0]);
  const littersNeeded = Number(input[1]);
  const dayFromWeek = input[2];
  const gazolinePricePerLitter = 2.1;
  const guidePrice = 100;

  let gazolineTotal = gazolinePricePerLitter * littersNeeded;
  let price = gazolineTotal + guidePrice;

  switch (dayFromWeek) {
    case "Saturday":
      price -= 0.1 * price;
      break;
    case "Sunday":
      price -= 0.2 * price;
      break;
  }

  if (budget > price) {
    let diff = budget - price;
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    let diff = price - budget;
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}
safari(["120", "30", "Saturday"]);
