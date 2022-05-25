function movieDestination(input) {
  const budget = Number(input[0]);
  const destination = input[1];
  const season = input[2];
  const countOfDays = Number(input[3]);
  let price = 0;

  switch (destination) {
    case "Dubai":
      if (season === "Winter") {
        price += 45000 * countOfDays;
      } else {
        price += 40000 * countOfDays;
      }
      break;
    case "Sofia":
      if (season === "Winter") {
        price += 17000 * countOfDays;
      } else {
        price += 12500 * countOfDays;
      }
      break;
    case "London":
      if (season === "Winter") {
        price += 24000 * countOfDays;
      } else {
        price += 20250 * countOfDays;
      }
      break;
  }
  if (destination === "Dubai") {
    price -= 0.3 * price;
  } else if (destination === "Sofia") {
    price += 0.25 * price;
  }
  let diff = Math.abs(budget - price);
  if (budget >= price) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}
movieDestination(["200000", "London", "Summer", "7"]);
