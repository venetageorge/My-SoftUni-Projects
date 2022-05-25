function easterEggsBattle(input) {
  let index = 0;
  let countEggsFirst = Number(input[index]);
  index++;
  let countEggsSecond = Number(input[index]);
  index++;
  let command = input[index];

  while (command !== "End of battle") {
    if (command === "one") {
      countEggsSecond--;
      if (countEggsSecond === 0) {
        break;
      }
    } else {
      countEggsFirst--;
      if (countEggsFirst === 0) {
        break;
      }
    }
    index++;
    command = input[index];
  }
  if (command === "End of battle") {
    console.log(`Player one has ${countEggsFirst} eggs left.`);
    console.log(`Player two has ${countEggsSecond} eggs left.`);
  } else if (countEggsFirst === 0) {
    console.log(
      `Player one is out of eggs. Player two has ${countEggsSecond} eggs left.`
    );
  } else if (countEggsSecond === 0) {
    console.log(
      `Player two is out of eggs. Player one has ${countEggsFirst} eggs left.`
    );
  }
}
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);
