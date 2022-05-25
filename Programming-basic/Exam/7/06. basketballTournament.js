function basketballTournament(input) {
  let index = 0;
  let nameOfTournir = input[index];
  index++;
  let countOfGames = Number(input[index]);
  let dessi = 0;
  let other = 0;
  let win = 0;
  let lose = 0;
  let counterAll = 0;

  while (nameOfTournir !== "End of tournaments") {
    countOfGames = Number(input[index]);
    index++;
    let counter = 0;

    for (let i = 1; i <= countOfGames; i++) {
      counter++;
      counterAll++;
      let dessiPoints = Number(input[index]);
      index++;
      dessi = dessiPoints;
      let otherTeamPoints = Number(input[index]);
      index++;
      other = otherTeamPoints;
      if (dessi > other) {
        win++;
        let diff = dessi - other;
        console.log(
          `Game ${counter} of tournament ${nameOfTournir}: win with ${diff} points.`
        );
      } else {
        lose++;
        let diff = other - dessi;
        console.log(
          `Game ${counter} of tournament ${nameOfTournir}: lost with ${diff} points.`
        );
      }
    }
    nameOfTournir = input[index];
    index++;
    if (nameOfTournir === "End of tournaments") {
      break;
    }
  }
  let winPercent = (win / counterAll) * 100;
  let losePercent = (lose / counterAll) * 100;

  if (nameOfTournir === "End of tournaments") {
    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${losePercent.toFixed(2)}% matches lost`);
  }
}
basketballTournament([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);
