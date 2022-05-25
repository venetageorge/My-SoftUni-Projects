function easterCompetition(input) {
  const countOfEasterBread = Number(input[0]);
  let index = 1;
  let name = input[index];
  index++;
  let bestBakerName = "";
  let bestBakerPoint = -1;

  for (let i = 1; i <= countOfEasterBread; i++) {
    let points = 0;
    let rate = input[index];

    while (name !== "Stop") {
      rate = input[index];
      if (rate === "Stop") {
        console.log(`${name} has ${points} points.`);
        if (points > bestBakerPoint) {
          bestBakerName = name;
          bestBakerPoint = points;
          console.log(`${name} is the new number 1!`);
        }
        break;
      }
      index++;
      points += Number(rate);
    }

    index++;
    name = input[index];
    index++;
  }

  console.log(`${bestBakerName} won competition with ${bestBakerPoint} points!`);
}
easterCompetition(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
