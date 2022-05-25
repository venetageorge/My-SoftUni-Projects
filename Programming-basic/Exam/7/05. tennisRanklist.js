function tennisRanklist(input) {
  let index = 0;
  let countTournirs = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let points = startPoints;
  let game = input[index];
  let wPoints = 2000;
  let wTotal = 0;
  let fPoints = 1200;
  let fTotal = 0;
  let sfPoints = 720;
  let sfTotal = 0;
  let winCounter = 0;

  for (let i = 1; i <= countTournirs; i++) {
    game = input[index];
    switch (game) {
      case "W":
        wTotal += wPoints;
        points += wPoints;
        winCounter++;
        break;
      case "F":
        fTotal += fPoints;
        points += fPoints;
        break;
      case "SF":
        sfTotal += sfPoints;
        points += sfPoints;
        break;
    }

    index++;
  }
  let avg = (wTotal + fTotal + sfTotal) / countTournirs;
  let win = (winCounter / countTournirs) * 100;
  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.floor(avg)}`);
  console.log(`${win.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
