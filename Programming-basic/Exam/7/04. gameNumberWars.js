function gameNumberWars(input) {
  let index = 0;
  let firstName = input[index];
  index++;
  let secondName = input[index];
  index++;
  let command = input[index];
  let first = 0;
  let second = 0;
  let points = 0;
  let firstPoints = 0;
  let secondPoints = 0;
  let name = "";
  let isEqual = false;

  while (command !== "End of game") {
    first = Number(command);
    index++;
    command = input[index];
    second = Number(command);
    if (first > second) {
      firstPoints += first - second;
      name = firstName;
    } else if (first < second) {
      secondPoints += second - first;
      name = secondName;
    } else {
      isEqual = true;
      index++;
      command = input[index];
      first = Number(command);
      index++;
      command = input[index];
      second = Number(command);
      if (first > second) {
        points += firstPoints;
        name = firstName;
      } else {
        points += secondPoints;
        name = secondName;
      }
      break;
    }

    index++;
    command = input[index];

    if (command === "End of game") {
      break;
    }
  }
  if (command === "End of game") {
    console.log(`${firstName} has ${firstPoints} points`);
    console.log(`${secondName} has ${secondPoints} points`);
  } else {
    console.log(`Number wars!`);
    console.log(`${name} is winner with ${points} points`);
  }
}
gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);