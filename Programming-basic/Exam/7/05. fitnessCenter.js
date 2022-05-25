function fitnessCenter(input) {
  let countVisitors = Number(input[0]);
  let index = 1;
  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let proteinShake = 0;
  let proteinBar = 0;

  for (let i = 1; i <= countVisitors; i++) {
    let command = input[index];

    switch (command) {
      case "Back":
        back++;
        break;
      case "Chest":
        chest++;
        break;
      case "Legs":
        legs++;
        break;
      case "Abs":
        abs++;
        break;
      case "Protein shake":
        proteinShake++;
        break;
      case "Protein bar":
        proteinBar++;
        break;
    }

    index++;
  }
  let percentTrainig = ((back + chest + legs + abs) / countVisitors) * 100;
  let proteintPeople = ((proteinShake + proteinBar) / countVisitors) * 100;
  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${percentTrainig.toFixed(2)}% - work out`);
  console.log(`${proteintPeople.toFixed(2)}% - protein`);
}
fitnessCenter([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
