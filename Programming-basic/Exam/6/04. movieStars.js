function movieStars(input) {
  let budget = Number(input[0]);
  let index = 1;
  let actorName = input[index];

  while (actorName !== "ACTION") {
    if (actorName.length > 15) {
      budget -= budget * 0.2;
    } else {
      index++;
      let salary = Number(input[index]);
      budget -= salary;
    }
    if (budget < 0) {
      break;
    }

    index++;
    actorName = input[index];

    if (actorName === "ACTION") {
      break;
    }
  }
  if (actorName === "ACTION") {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}
movieStars([
  "1000",
  "John Cena",
  "800",
  "Freddy Kim",
  "3000",
  "ACTION",
]);