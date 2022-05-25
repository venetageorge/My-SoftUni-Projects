function easterTrip(input) {
  let destination = input[0];
  let period = input[1];
  const countNights = Number(input[2]);
  let price = 0;

  switch (destination) {
    case "France":
      if (period === "21-23") {
        price += 30;
      } else if (period === "24-27") {
        price += 35;
      } else {
        price += 40;
      }
      break;
    case "Italy":
      if (period === "21-23") {
        price += 28;
      } else if (period === "24-27") {
        price += 32;
      } else {
        price += 39;
      }
      break;
    case "Germany":
      if (period === "21-23") {
        price += 32;
      } else if (period === "24-27") {
        price += 37;
      } else {
        price += 43;
      }
      break;
  }
  let total = price * countNights;
  console.log(`Easter trip to ${destination} : ${total.toFixed(2)} leva.`);
}
easterTrip(["France", "28-31", "8"]);
