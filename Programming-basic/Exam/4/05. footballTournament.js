function footballTournament(input) {
  let footballName = input[0];
  let count = Number(input[1]);
  let index = 2;
  let result = input[index];
  let wCount = 0;
  let dCount = 0;
  let lCount = 0;
  let wCounter = 0;
  let dCounter = 0;
  let lCounter = 0;

  for (let i = 0; i <= count; i++) {
    result = input[index];
    index++;

    if (count === 0) {
      break;
    }

    switch (result) {
      case "W":
        wCount += 3;
        wCounter++;
        break;
      case "D":
        dCount += 1;
        dCounter++;
        break;
      case "L":
        lCount += 0;
        lCounter++;
        break;
    }
  }
  total = wCount + dCount + lCount;
  percent = (wCounter / count) * 100;
  if (count === 0) {
    console.log(`${footballName} hasn't played any games during this season.`);
  } else {
    console.log(`${footballName} has won ${total} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${wCounter}`);
    console.log(`## D: ${dCounter}`);
    console.log(`## L: ${lCounter}`);
    console.log(`Win rate: ${percent.toFixed(2)}%`);
  }
}
footballTournament(["Chelsea", "0"]);
