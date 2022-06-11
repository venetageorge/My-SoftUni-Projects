function tennisRanklist(input) {
  let index = 0;
  let countTurn = Number(input[index]);
  index++;
  let firstPoints = Number(input[index]);
  index++;
  let tempPoints = 0;
  let winCounter = 0;

  for (let i = 0; i < countTurn; i++) {
    let score = input[index];
    index++;
    switch (score) {
    case "W":
      tempPoints += 2000;
      winCounter++;
      break;
    case "F":
      tempPoints += 1200;
      break;
    case "SF":
      tempPoints += 720;
      break;
    }
    }
  let finalPoints = firstPoints + tempPoints;
  let avgPoints = Math.floor(tempPoints / countTurn);
  let winGamePoints = winCounter / countTurn * 100;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(`${winGamePoints.toFixed(2)}%`);
}
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
