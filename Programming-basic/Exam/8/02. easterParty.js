function easterParty(input) {
  const countGuests = Number(input[0]);
  let priceOnePerson = Number(input[1]);
  const budget = Number(input[2]);

  if (countGuests >= 10 && countGuests <= 15) {
    priceOnePerson -= 0.15 * priceOnePerson;
  } else if (countGuests > 15 && countGuests <= 20) {
    priceOnePerson -= 0.2 * priceOnePerson;
  } else if (countGuests > 20) {
    priceOnePerson -= 0.25 * priceOnePerson;
  }
  let cakePrice = 0.1 * budget;
  let totalSum = countGuests * priceOnePerson + cakePrice;
  let diff = Math.abs(totalSum - budget);

  if (totalSum >= budget) {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  } else {
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  }
}
easterParty(["24", "35", "550"]);
