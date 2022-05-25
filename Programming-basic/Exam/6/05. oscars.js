function oscars(input) {
  let index = 0;
  let actorName = input[index];
  index++;
  let pointsFromAccademy = Number(input[index]);
  index++;
  let countJury = Number(input[index]);
  index++;
  isNominated = false;

  for (let i = 0; i < countJury; i++) {
    let nameJury = input[index];
    index++;
    let pointsFromJury = Number(input[index]);
    index++;

    let actorPoints = (nameJury.length * pointsFromJury) / 2;
    pointsFromAccademy += actorPoints;

    if (pointsFromAccademy > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAccademy.toFixed(
          1
        )}!`
      );
      isNominated = true;
      break;
    }
  }
  let diff = Math.abs(pointsFromAccademy - 1250.5);
  if (!isNominated) {
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
