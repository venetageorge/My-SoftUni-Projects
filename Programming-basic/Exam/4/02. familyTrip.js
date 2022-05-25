function familyTrip(input) {
  let budget = Number(input[0]);
  let countNights = Number(input[1]);
  let priceForOneNight = Number(input[2]);
  let percentExtraTax = Number(input[3]);

  if (countNights > 7) {
    priceForOneNight -= 0.05 * priceForOneNight;
  }
  let totalPriceForNights = countNights * priceForOneNight;
  let percentExtra = (percentExtraTax / 100) * budget;
  let total = totalPriceForNights + percentExtra;
  let diff = Math.abs(total - budget);
  if (total <= budget) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip(["500", "7", "66", "15"]);
